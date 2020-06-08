let students = [
    {
        name: 'Taro',
        language: 84,
        maths: 62,
        science: 50,
    },
    {
        name: 'Kenji',
        language: 54,
        maths: 70,
        science: 62,
    },
    {
        name: 'Haruna',
        language: 90,
        maths: 80,
        science: 70,
    },
]

let pass = students.filter(function (student) {
    return student.language >= 80
})

console.log(pass)