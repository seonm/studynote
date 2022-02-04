// 얕은 복사
// const data1 = {a: 100, b:200, c:300}
// const data2 = data1;

// data2.b = 500;

// console.log(data1)
// console.log(data2)

// 깊은 복사
const data1 = {a: 100, b:200, c:300}
const data2 = {};

// 방법1
// data2.a = data1.a; // 빈곳에 값을 넣으면 생성되는 원리를 활용한 것
// data2.b = data1.b;
// data2.c = data1.c;

// 방법2
Object.assign(data2, data1)

data2.c = 500;

console.log(data1)
console.log(data2)