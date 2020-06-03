const myFruits = ["りんご", "いちご", "めろん", "みかん", "すいか", ];
const newFruits = myFruits.filter(function(fruit) {
    return fruit !== "めろん";
});
console.log(newFruits);