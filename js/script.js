const todoList = []
let inputForm, todoMain, tabButton, sortMenu

// DOMを変数に登録する
function registerDOM() {
    inputForm = document.querySelector('#input-form')
    todoMain = document.querySelector('#todo-main')
    tabButton = document.querySelector('#tab').querySelectorAll('button')
    sortMenu = document.querySelector('#sort-menu')
}

// 初期化
function initialize() {
    registerDOM()
    bindEvents()
    updateTodoList()
}

document.addEventListener('DOMContentLoaded', initialize.bind(this))

/** DOM にイベントを設定する */
function bindEvents() {
    inputForm.addEventListener("submit", event => handleSubmit(event))
    // インボックス / 完了済の切り分けボタン
    tabButton.forEach(tab => {
        tab.addEventListener('click', event => handleTabClick(event))
    })
    // 表示順のソート
    sortMenu.addEventListener('change', event => handleSort(event))
}

let displayTarget = 'inbox'

function handleTabClick(event) {

    // クリックしたターゲット(ボタン)を変数化する
    const me = event.currentTarget

    // data属性から表示ターゲットを切り替える
    displayTarget = me.dataset.currentTarget

    // HTMLを再描画
    updateTodoList()
}

// Todoを登録する処理
function handleSubmit(event) {
    event.preventDefault()
    const todoObj = {
        text: inputForm['input-text'].value
    }
    addTodo(todoObj)
}

// todoListを追加する
function addTodo(todoObj) {
    // ユニークなID
    todoObj.id = 'todo-' + (todoList.length + 1)
    
    // 作成日
    todoObj.createdAt = new Date().toLocaleString()
    
    // 優先度
    todoObj.priority = 3

    // 完了フラグ
    todoObj.isDone = false

    // 編集中フラグ
    todoObj.isEdit = false

    // todoList配列の先頭に挿入する
    todoList.unshift(todoObj)

    // HTMLを生成する
    updateTodoList()

    // フォームを初期化する
    clearInputForm()
}

// TodoListの描画を更新する
function updateTodoList() {
    let htmlStrings = ''

    // HTMLを書き換える
    todoList
        .filter(todo => !todo.isDone !== (displayTarget === 'inbox')) //フィルタを追加
        .sort(sortTodos)
        .forEach(todo => {
            // 新しいHTMLを出力
            htmlStrings += createTodoHtmlString(todo)
            todoMain.innerHTML = htmlStrings  
        })
    todoMain.innerHTML = htmlStrings

    // 書き換えたHTMLにイベントをバインドする
    todoList
        .filter(todo => todo.isDone !== (displayTarget === 'inbox'))
        .forEach(todo => {
            // trタグにidが振られているので、それを拾う
            const todoEl = document.getElementById(todo.id)
            // 空の場合もあるのでif文で括る
            if (todoEl) {

                // 存在したら、tr内のボタンタグを抽出する
                todoEl.querySelectorAll('button').forEach(btn => {

                    // ボタンのdata属性からボタンの種別を判別する
                    const type = btn.dataset.type
                    btn.addEventListener('click', event => {
                        
                        // data属性がindexもしくはdoneだったら完了/未完了ボタンなのでトグルする関数を実行する
                        if (type.indexOf('inbox') >= 0 || type.indexOf('done') >= 0) {
                            updateTodoState(todo, type)
                        }
                    })  
                })
            }
        })
}

// フォームをクリアする
function clearInputForm() {
    inputForm['input-text'].value = ''
}


let sortIndex = 'created-desc'

// ソートの実行
function handleSort(e) {
    sortIndex = e.currentTarget.value
    updateTodoList()
}

// Todo1個単位のHTML文字列を生成する
function createTodoHtmlString(todo) {
    // HTML文字列をプールする変数
    let htmlString = ''

    // HTMLのdata属性に設定する編集中を判定する内容
    const editType = todo.isEdit ? 'editFixed' : 'edit'

    // ボタンのラベルを編集中かどうかで分岐する
    const editButtonLabel = todo.isEdit ? '編集完了' : '編集'

    // HTMLのdata属性に設定する完了したかどうかを判定する内容
    const doneType = todo.isDone ? 'index' : 'done'

    // ボタンのラベルを未完了か完了かで分岐する
    const doneButtonLabel = todo.isDone ? '未完了' : '完了'

    // todoテキストが入るテーブルセルHTML文字列をプールする変数
    let todoTextCell = ''

    // 優先度テキストが入るテーブルセルHTML文字列をプールする変数
    let priorityCell = ''

    // 編集中か、そうでないかで描画するHTMLを分岐する
    if (todo.isEdit) {
        // 該当のtodoオブジェクトが編集中の場合はテキストフィールドを描画する
        // テキストフィールドなのでユーザーは文字や数値を変更できるようになる
        todoTextCell = 
            `<td class="cell-text">
                <input class="input-edit" type="text" value="`
                + todo.text
                + ` "/>
            </td>`
        priorityCell = 
            `<td class="cell-priority">
                <input class="input-priority" type="number" value="` + todo.priority + ` "/>
            </td>`
    } else {
        // 通常時の状態
        // ユーザーは情報を見るだけなので普通のテキストとして表示すればOK
        todoTextCell =
            `<td class="cell-text">` + todo.text + `</td>`
        priorityCell = 
            `<td class="cell-priority">` + todo.priority + `</td>`        
    }

    // Todoオブジェクト1つにつき1行なので、行を生成するtrタグを先ず作る
    htmlString += '<tr id="' + todo.id + '">'

    // 編集中を判定する為の文字列をdata属性に埋め込んでボタンを作る
    // 非編集時は編集ボタンを、編集中は編集完了ボタンとなる
    htmlString +=
        `<td class="cell-edit-button">
            <button data-type="` + editType + '">' + editButtonLabel + '</button>'
        '</td>'

    // 先に作成したTodoの文字列情報
    htmlString += todoTextCell

    // Todoオブジェクトの作成日
    htmlString += `<td class="cell-created-at">` + todo.createdAt + "</td>"

    // 優先度
    htmlString += priorityCell

    // 完了ボタンのセルを作る
    htmlString += '<td class="cell-done">'

    // Todoオブジェクトの完了状態を文字列としてdata属性に埋め込む
    htmlString += '<button data-type="' + doneType + '">'

    // 完了かそうでないかをボタンのラベルに表示する
    htmlString += doneButtonLabel

    htmlString += `</button></td>`

    htmlString += '</tr>'
    
    // 作ったHTMLを返す
    return htmlString
}

// todoの完了ステートの変更
function updateTodoState(todo, type) {

    // ボタンのdata属性とTodoオブジェクトのパラメータを比較する
    todo.isDone = type === 'done'
    updateTodoList()
}

// ソート関数
function sortTodos(a, b) {
    switch (sortIndex) {
        case 'created-desc':
            return Date.parse(b.createdAt) - Date.parse(a.createdAt)

        case 'created-asc':
            return Date.parse(a.createdAt) - Date.parse(b.createdAt)

        case 'priority-desc':
            return b.priority - a.priority

        case 'priority-asc':
            return a.priority - b.priority
    
        default:
            return todoList
    }
}

