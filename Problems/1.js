/** 
Числа, кратные 3 или 5
Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
Найдите сумму всех чисел меньше 1000, кратных 3 или 5.
*/

function sumOfMultiples(limit) {
  return Array
    .from(Array(limit).keys()) // создаю массив чисел, с длиной limit
    .filter(num => {
      return !(num % 3) || !(num % 5) // фильтрую массив по кратности (3,5)
    })
    .reduce((accum, num) => accum + num) // считаю сумму
}

console.log(sumOfMultiples(10)) // 23
console.log(sumOfMultiples(1000)) // 233168