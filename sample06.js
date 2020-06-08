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

students
    .map(function (student) {
        let total = 
            student.language 
            + student.maths
            + student.science

        return {
            name: student.name,
            total: total
        }
    }).filter(function (student) {

        return student.total >= 100

    }).forEach(function (student) {

        console.log(
            student.name
            + 'さんの合計点数は'
            + student.total
            + 'です。'
        )
    })
