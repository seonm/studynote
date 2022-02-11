// %20 = 공백

/*
encodingURI(string)
주어진 문자열을 URL에 포함시키기에 적절한 형태로 변한(=인코딩)하는 처리

[인코딩하지 않는 문자]
- A_Z, a-z, 0-9, / ? : @ & = + $ - _ . ! ~ * ' ( ) #

[잘못된 경우]
<a href = "result.html?a=100&b=200&name=자바스크립트">click</a>

[올바른 경우]
<a href = "result.html?a=100&b=200&name=자바스크립트">click</a>
*/
const set1 = ';,/?:@&=+$#'; // 예약 문자
const set2 = "-_.!~*()'"; // 비예약 문자 
const set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
const set4 = '자바스크립트'// 

// 특수문자(예약문자 및 비예약문자)를 변환하지 못하기 때문에 UTF-8환경에서는 사용이 불가
const enc1 = encodeURI(set1); // ;,/?:@&=+$#
const enc2 = encodeURI(set2); // -_.!~*()'
const enc3 = encodeURI(set3); // ABC%20abc%20123
const enc4 = encodeURI(set4); // %EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

console.group('encodeURI');
  console.log(enc1);
  console.log(enc2);
  console.log(enc3);
  console.log(enc4);
console.groupEnd()

// 인코딩된 문자열을 원래의 문자열로 역변환
console.group('decodeURI');
  console.log(decodeURI(enc1))// ;,/?:@&=+$#
  console.log(decodeURI(enc2))//-_.!~*()'
  console.log(decodeURI(enc3))//ABC abc 123
  console.log(decodeURI(enc4))//자바스크립트
console.groupEnd()