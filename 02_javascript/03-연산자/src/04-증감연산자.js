// 1. 변수 스스로 1 증가
let selfPlus = 1;
console.log(selfPlus); // 1

selfPlus++;
console.log(selfPlus); // 2

++selfPlus;
console.log(selfPlus); // 3

// 2. 변수 스스로 1감소
let selfMinus = 1;
console.log(selfMinus); // 1

selfMinus--;
console.log(selfMinus); // 0

--selfMinus;
console.log(selfMinus); // -1

// 3. 전위 증감 연산자
let prevValue = 1;
let prevResult = 100 + ++prevValue;

console.log(prevResult); // 102
console.log(prevValue); // 2

// 4. 후위 증감 연산자
let nextValue = 1;
let nextResult = 100 + nextValue++

console.log(nextResult); // 101
console.log(nextValue); // 2