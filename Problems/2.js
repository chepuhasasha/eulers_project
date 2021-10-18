/**
Четные числа Фибоначчи
Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.
*/

function FibRow(arr, limit) {
  arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  if(arr[arr.length - 1] < limit) {
    FibRow(arr, limit)
  }
  return arr
}

function EvenFibonacciNumbers(limit) {
  const row = FibRow([1,2], limit)
  return {
    sum: row.filter(num => !(num % 2)).reduce((accum, num) => accum + num),
    row
  }
}

console.log(EvenFibonacciNumbers(4000000))
