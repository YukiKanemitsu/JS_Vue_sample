let today = new Date(); //基準となる日付を取得

console.log('今日は' + today.getDate() + '日です')

let pastDay = new Date()

pastDay.setTime(today.getTime())
pastDay.setDate(today.getDate() - 7) //今日の日付に100足してsetDate

console.log(
    '7日前の日付は'
    + pastDay.getFullYear()
    + '年'
    + (pastDay.getMonth() + 1)
    + '月'
    + pastDay.getDate()
    + '日です'
)