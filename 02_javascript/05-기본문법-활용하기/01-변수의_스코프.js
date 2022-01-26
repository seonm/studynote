// 1. var 중복 선언
//if문의 실행 여부에 따라 선언여부 및 식별 가능 여부가 결정됨
//num1을 식별하지 못할경우 정의되지 않은 값(undefined)이 노출됨

// 조건문이 실행되지 않는 경우 변수 선언되지않음.
if (false) {
  var num1 = 100;
  console.log("블록안 " + num1);
}
console.log("블록밖 " + num1); //식별불가 //블록밖 undefined

// 조건문이 실행되는 경우 변수 선언.
if (true) {
  var num2 = 100;
  console.log("블록안 " + num2); //블록안 100
}
console.log("블록밖 " + num2); //블록밖 100

// 2. let 중복 선언
let num3 = 100;
if (true) {
  let num4 = num3 + 100; //{}밖에서 선언된 변수 내부에서 사용 가능
  console.log("블록안 " + num4); //블록안 200
}

//console.log('블록밖 ' + num4);//Error
//let으로 선언된 변수는 if문 실행여부와 상관없이 {}밖을 빠져나갈 수 없다.

// 3. for문의 초기식을 var로 선언한 경우
for (var i = 0; i < 10; i++) {
  console.log("반복문 안 :::" + i); // 0~9까지 반복
}
console.log("반복문 밖 >>>" + i); // 10

// 4. for문의 초기식을 let으로 선언한 경우
for (let i = 0; i < 10; i++) {
  console.log("반복문 안 :::" + i); // 0~9까지 반복
}
//console.log('반복문 밖 >>>' + i) // Error
//if문과 동일하게 let내부 선언 변수는 밖으로 나올 수 없다.

// 5. 선언되지 않은 변수의 경우
// let 키워드는 반드시 선언 -> 할당의 순서로만 사용가능
x = 100; //할당
let x; //선언
console.log(x); // Error
// var 키워드는 할당 후 선언이 가능

y = 100; //할당
var y; //선언
console.log(y);
