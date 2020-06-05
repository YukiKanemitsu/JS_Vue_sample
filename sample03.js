function trimmingText(text) {
    if (text.length >= 4) {
        return text.substring(0, 3)
    } else {
        return text        
    }
}

const myWord1 = 'パイナップル'
const myWord2 = 'さくらんぼ'
const newWord1 = trimmingText(myWord1)
const newWord2 = trimmingText(myWord2)
console.log(newWord1)
console.log(newWord2)