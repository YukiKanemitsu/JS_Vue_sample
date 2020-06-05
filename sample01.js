const myWord = 'パイナップル'
let newWord = ''
if (myWord.length >= 4) {
    newWord = myWord.substring(0, 3)
} else {
    newWord = myWord
}

console.log(newWord)