// 함수에 변수 대입

// sayhello라는 이름을 갖는 일반적인 함수의 사용과 호출
function sayHello(msg){
  console.log('sayHello(' + msg + ')');
}
sayHello('안녕하세요 자바스크립트!');

// 함수는 다른 변수에 대입 가능하다.
const say = sayHello;

// 함수가 대입된 변수는 그 자체가 함수의 역할을 한다.
say('Hello javascript')