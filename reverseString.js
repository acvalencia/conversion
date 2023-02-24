const reverseString = (str) => {
  const arr = str.split('')
  let result = ''
  for (let i = arr.length-1; i >= 0; i--) {
    result += arr[i];
  }
  return result
}

const test1 = 'conversion!'
const test2 = 'everything'
const test3 = 'homero'

console.log(reverseString(test1))
console.log(reverseString(test2))
console.log(reverseString(test3))
