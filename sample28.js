const myFruits = ["りんご", "いちご", "ぱいなっぷる",]
const isExistAll = myFruits.every(function(fruit) {
    return fruit.length === 3
})

console.log(isExistAll)