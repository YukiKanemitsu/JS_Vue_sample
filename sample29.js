const myFruits = ["りんご", "いちご", "ぱいなっぷる",]
const threeLengthFruit = myFruits.find(function(fruit) {
    return fruit.length === 3
})

console.log(threeLengthFruit)