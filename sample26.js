const myFruits = ["りんご", "いちご", "めろん",]
const isExist = myFruits.some(function(fruit) {
    return fruit === 'みかん'
})

console.log(isExist)