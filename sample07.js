let myThings = {
    sports: 'サッカー',
    hobby: 'テーブルトークRPG',
    food: 'カレーライス',
}

let div = document.querySelector('#root')

div.innerHTML = 
    '好きなスポーツ:' + myThings.sports + '<br />'
    + '好きな遊び:' + myThings.hobby + '<br />'
    + '好きな食べ物:' + myThings.food + '<br />'
