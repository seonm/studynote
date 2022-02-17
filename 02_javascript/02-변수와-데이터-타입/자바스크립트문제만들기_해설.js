//## Q1
//다음 a,b를 사용하여 console.log(a)를 출력했을때 동일한 결과물이 산출되는 것은?
const a = [2, 1, 3]

// a.pop() // [2, 1]
// a.splice(0,3,2) //[ 2 ]
// a.substring(0,2) // TypeError substring은 문자열을 자르는 함수이다.
// a.shift() // [ 1, 3 ]
// a.trim(2) // TypeError trim은 공백을 제거하는 함수이다.
console.log(a)