let timeoutId = setTimeout(() => {
    console.log('5秒経過しました')
}, 5000);

clearTimeout(timeoutId)