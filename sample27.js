const myFruits = ["りんご", "いちご", "めろん",]
const isExistAll = myFruits.every(function(fruit) {
    return fruit.length === 3
})

console.log(isExistAll)