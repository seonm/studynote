// 1. JSON에 대한 구조분해 (=비구조 할당)
// react, node 많이 나옴
// JSON(혹은 객체)에서 값들을 추출하여 새로운 상수로 만들어줌
// json을 알맹이를 추출해 개별적인 변수에 복사하려고 하는 것

const object = {a:1, b:2}; 

// 방법1
// 변수명이 달라도 상관없다.
const a = object.a; 
const b = object.b;

//방법2
// object에는 {}안에 명시된 항목과 동일한 key를 갖는 데이터가 존재해야 한다.
// 순서상관없이 이름이 똑같은 데이터를 매칭해준다.
const {a, b} = object;

// 필요한 일부값만 복사시에 많이 사용한다.
const data = { myname: 'hello', age: 20, height: 172, weight: 85};
const {myname} = data;
console.log(myname); //hello

// 이름을 바꿔서 추출하기
// 거의 사용하지 않는다.
// data 안에 있는 height와 weight를 분해하면서 이름을 h와 w로 변경
const {height: h, weight: w} = data;
console.log(h); // 172
console.log(w); // 85
console.log(data); //{ name: 'hello', age: 20, height: 172, weight: 85 }

// 구조분해를 수행한 나머지를 별도로 분리하기
// --> 'rest_b'라는 것은 단순한 변수 이름이므로 어떤 단어를 사용해도 무관
const dummy = { a1: 100, a2: 200, a3: 300, a4: 400};
const {a1, a2, ...rest_b} = dummy
console.log(a1); // 100
console.log(a2); // 200
console.log(rest_b); // { a3: 300, a4: 400 }

// 구조분해를 활용하여 기존 데이터와 추가적인 값을 병합한 새로운 객체 생성
// --> '...' 뒤에 오는 변수명은 반드시 원본 객체 이름이여야 한다.
const origin = {name: 'javascript', age: 25}

// '...origin'의 위치로 데이터를 불러오는 순서가 바뀐다.
const newdata1 = {...origin, gender: 'M'} 
const newdata2 = {gender: 'M', ...origin} 
console.log(newdata1); // { name: 'javascript', age: 25, gender: 'M' }
console.log(newdata2); // { gender: 'M', name: 'javascript', age: 25 }


const origin = {name: 'javascript', age: 25};

// 구조분해를 통한 새로운 데이터 생성시 원본과 동일한 이름의 속성이 있다면 원본 데이터를 수정한다.
// 나중에 명시된게 먼저 명시된 것을 덮어 쓴다.
const newdata2 = {...origin, age: 30, gender: 'F'};
const newdata3 = {age: 30, gender: 'F', ...origin};

console.log(newdata2);
// { name: 'javascript', age: 30, gender: 'F' }
console.log(newdata3);
// { age: 25, gender: 'F', name: 'javascript' }


// 2. 배열에 대한 구조분해
// 기본사용 - 배열은 구조분해를 잘 사용하지 않는다.
// one,two 배열 원하는 이름 지정하면됨 > 순서대로 자리 맞춰서 들어가는 것
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

// 구조분해를 수행한 나머지를 별도로 분리하기
[b1, b2, ...rest_b] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(b1); // 1
console.log(b2); // 2
console.log(rest_b); // [3, 4, 5, 6, 7, 8, 9]