// 1. 사칙연산 출력하기
const a = 5;
const b = 1;

console.log(a + b) // 더하기 6
console.log(a - b) // 빼기 4
console.log(a * b) // 곱하기 5
console.log(a / b) // 나누기 5
console.log(a % b) // 나머지 0

// 2. 연산 결과를 다른 변수에 할당
const x = 5;
const y = 3;
const z = x + y - 2;
console.log(z); // 6

// 3. 나눗셈
const myValue1 = 10;
const myValue2 = 4;
console.log(myValue1 / myValue2) // 2.5

// 나누어 떨어지지 않는 나눗셈 : 소수점 16번째 자리수까지 구함
const myValue3 = 4;
const myValue4 = 3;
console.log(myValue3 / myValue4); // 1.3333333333333333 

// 4. 문자열 연산
// 문자열은 덧셈만 가능

// 문자열끼리 덧셈
const myString1 = 'Hello';
const myString2 = 'World';
console.log(myString1 + myString2); //HelloWorld

// 문자열 + 다른 타입 덧셈 : 다른 타입 모두 문자열로 자동 변환시킴
console.log('안녕하세요' + 123); // 안녕하세요123
console.log('안녕하세요' + true); // 안녕하세요true
console.log('안녕하세요' + null); // 안녕하세요null
console.log('안녕하세요' + undefined); //안녕하세요undefined

