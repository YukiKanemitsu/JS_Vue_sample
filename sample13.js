let myThings = {}

Object.defineProperties(myThings, {
    sports: {
        enumerable: true,
        writable: true,
        value: 'サッカー',
    },
    food: {
        enumerable: false,
        writable: false,
        value: 'カレーライス',
    },
})

// enumerable属性
console.log(Object.keys(myThings))

// writable属性
myThings.sports = 'ラグビー'
console.log(myThings.sports)

myThings.food = '寿司'
console.log(myThings.food)