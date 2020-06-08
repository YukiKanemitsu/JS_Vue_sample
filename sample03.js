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

students.forEach(function (student) {
    let total = 
        student.language
        + student.maths
        + student.science    

    console.log(
        '生徒の名前は'
        + student.name
        + 'さんです'
    )

    console.log(
        '合計点数は'
        + total
        + '点です。'
    )
})