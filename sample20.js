const myFruits = ["りんご", "いちご", "めろん", "みかん", "すいか", ]
const newFruits = myFruits.filter(function(fruit) {
  return fruit.search('ん') !== -1
})
console.log(newFruits)