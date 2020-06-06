let today = new Date()

let dayNames = [
    '日',
    '月',
    '火',
    '水',
    '木',
    '金',
    '土',
]
let day = today.getDay()

console.log('今日は' + dayNames[day] + '曜日です')