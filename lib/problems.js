exports.problems = [
  {
    num: 1,
    name: 'Числа, кратные 3 или 5', 
    description: `
    Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9.
    Сумма этих чисел равна 23. Найдите сумму всех чисел меньше 1000, кратных 3 или 5.
    `,
    url: 'https://github.com/sashachepuha/eulers_project/blob/main/problems/1.js',
    code: `
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
    `
  },
  {
    num: 2,
    name: 'Четные числа Фибоначчи',
    description: `
    Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих.
    Начиная с 1 и 2, первые 10 элементов будут: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... 
    Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.
    `, 
    url: 'https://github.com/sashachepuha/eulers_project/blob/main/problems/2.js',
    code: `
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
    `
  }
];