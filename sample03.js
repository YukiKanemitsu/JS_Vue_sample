let count = 1

let intervalId = setInterval(() => {
    console.log(count + '秒経過しました')

    if (count >= 5) {
        clearInterval(intervalId)
        console.log('停止しました')   
    }

    count++
}, 1000);