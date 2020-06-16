// Vue アプリの生成
function createApp() {
  // 此処にVue.jsのコードを書く
  new Vue({
    el: '#wrapper',
    data: {
      filter: 'inbox',
      text: '',
      todos: [
        {
          id: 1, //識別用のID
          text: 'みかんを買う',
          createdAt: 1567940003455, // 登録日のUnixタイムスタンプ
          done: false //タスクが完了したかどうか
        },
        {
          id: 2,
          text: '郵便物を出す',
          createdAt: 1567940003455, // 登録日のUnixタイムスタンプ
          done: false //タスクが完了したかどうか
        },
        {
          id: 3, //識別用のID
          text: 'バターを買う',
          createdAt: 1567940003455, // 登録日のUnixタイムスタンプ
          done: false //タスクが完了したかどうか
        }
      ]
    },
    methods: {
      formatDate: function(timestamp) {
        
        // 引数のtimestamp から Date オブジェクトの生成
        const date = new Date(timestamp)

        // date から年、月、日を取得
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()

        // 「年.月.日」の形式で日付を返す
        return year + '.' + month + '.' + day
      },
      setFilter: function(filter) {
        this.filter = filter
      },
      toggleTodo: function(id) {
        this.todos = this.todos.map(function(todo) {
          
          // 引数の id を持つ todo の done を逆にする
          if (todo.id === id) {
            todo.done = !todo.done
          }
          return todo
        })
      },
      handleSubmit: function() {

        // テキストフィールドの内容をもとに Todo を追加する
        this.addTodo(this.text)

        // テキストフィールドを空にする
        this.text = ''
      },
      addTodo: function(text) {
        this.todos.push({
          id: this.todosLength + 1,
          text: text,
          createdAt: Date.now(),
          done: false          
        })
      }
    },
    computed: {
      todosLength: function () {
        return this.todos.length
      },
      filteredTodos: function() {
        const filter = this.filter
        return this.todos.filter(function(todo) {
          return filter === 'completed' ? todo.done : !todo.done
        })
      },
      disabled: function() {
        return this.text === ''
      },
    }
  })
}

// 初期化
function initialize() {
  createApp()
}

document.addEventListener('DOMContentLoaded', initialize.bind(this))