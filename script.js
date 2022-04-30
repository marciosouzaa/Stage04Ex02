const students = [
  {
    name: 'Marcio',
    noteOne: 9,
    noteTwo: 10
  },
  {
    name: 'Aline',
    noteOne: 8,
    noteTwo: 7
  },
  {
    name: 'João',
    noteOne: 2,
    noteTwo: 8
  },
  {
    name: 'Whinderson',
    noteOne: 6,
    noteTwo: 5
  }
]

let averageStudents = []
let average

for (let student of students) {
  average = (student.noteOne + student.noteTwo) / 2

  if (average >= 7) {
    alert(
      `A média do(a) ${student.name} é: ${average} \n parabens ${student.name}! Você foi aprovado(a)!`
    )
  } else {
    alert(
      `A média do(a) ${student.name} é: ${average} \n Não foi dessa vez, ${student.name}! Tente novamente!`
    )
  }
}
