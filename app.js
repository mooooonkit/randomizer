const minNum = prompt('Введите минимальное число для рандома (>0)')
const maxNum = prompt('Введите максимальное число для рандома (>0)')

function randomNum() {
  return (
    Math.floor(Math.random() * (Number(maxNum) - Number(minNum) + 1)) +
    Number(minNum)
  )
}

if (minNum.replace(/\d/g, '').length) {
  alert('Вы ввели не только цифры')
} else if (maxNum.replace(/\d/g, '')) {
  ;('Вы ввели не только цифры')
} else if (Number(maxNum) < Number(minNum)) {
  alert('Максимальное число меньше минимального')
} else if (Number(maxNum) <= 0) {
  alert('Максимальное число меньше или равно 0')
} else if (Number(minNum) <= 0) {
  alert('Минимальное число меньше или равно 0')
} else alert('Твоё рандомное число это: ' + randomNum())
