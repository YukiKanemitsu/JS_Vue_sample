const someDay = new Date(2020, 12, 25);

const dayNames = [
    '日',
    '月',
    '火',
    '水',
    '木',
    '金',
    '土',
]

const youbi = dayNames[someDay.getDay()]

console.log(
    someDay.getFullYear()
    + '年'
    + (someDay.getMonth() + 1)
    + '月'
    + someDay.getDate()
    + '日は'
    + youbi
    + '曜日です。'
)