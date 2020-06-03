const myFruits = ["りんご", "みかん", "スイカ", ]
let text = "私の好きな果物は"

myFruits.forEach(function(myFruits, i) {
    text += myFruits
    if (i !== myFruits.length - 1) {
        text += "と"
    }
})
text += "です。"
console.log(text)