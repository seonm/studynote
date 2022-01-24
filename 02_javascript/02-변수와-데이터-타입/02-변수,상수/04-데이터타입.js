"use strict";

// 데이터 타입확인하기 : typeof

// Number 숫자
let sampleValue1 = 123;
console.log(typeof sampleValue1);

// Boolean 논리값(true,false 만 반환)
let sampleValue2 = true;
console.log(typeof sampleValue2);

// String 문자열('',""로 감싼 문장, 글자의 집합)
let sampleValue3 = 'hello world';
console.log(typeof sampleValue3);

// Object 객체
let sampleValue4 = new Date();
console.log(typeof sampleValue4);
console.log(sampleValue4);

// Null 비어있는(아무런 기능이 없는 상태) 객체
let sampleValue5 = null;
console.log(typeof sampleValue5);
console.log(sampleValue5);

// undefined 선언만 하고 값이 정의되지 않은 상태
let sampleValue6;
console.log(typeof sampleValue6);
console.log(sampleValue6);