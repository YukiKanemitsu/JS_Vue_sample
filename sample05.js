function checkUmbrella(weather) {
    if (weather === '晴れ') {
        console.log('日傘が必要')
    } else if (weather === '雨') {
        console.log('雨傘が必要')        
    } else {
        console.log('傘は不要')
    }
}

checkUmbrella('晴れ')
checkUmbrella('雨')
checkUmbrella('曇り')
checkUmbrella('雪')