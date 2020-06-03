const myFruits = ["りんご", "みかん", "スイカ", ]
let text = "私の好きな果物は"
for (let i = 0; i < myFruits.length; i++) {
    text += myFruits[i]
    if (i !== myFruits.length - 1) {
        text += "と"
    }
}
text += "です。"
console.log(text)