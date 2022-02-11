// %20 = 공백

/*
encodeURIComponent(string)
알파벳과 숫자 및 비예약 표식을 제외한 모든 글자를 URL에 포함시킬 수 있는 문자열로 인코딩한다.
-> URL에 사용해도 문제가 없는 특수문자를 제외하고 모든 글자를 변환
*/

const set1 = ';,/?:@&=+$#'; //예약문자 
const set2 = "-_.!~*()'"; // 비예약문자 
const set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
const set4 = '자바스크립트'// 

const enc1 = encodeURIComponent(set1); // ;,/?:@&=+$#
const enc2 = encodeURIComponent(set2); // -_.!~*()'
const enc3 = encodeURIComponent(set3); // ABC%20abc%20123
const enc4 = encodeURIComponent(set4); // %EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

console.group('encodeURIComponent');
  console.log(enc1); //%3B%2C%2F%3F%3A%40%26%3D%2B%24%23
  console.log(enc2); //-_.!~*()'
  console.log(enc3);//ABC%20abc%20123
  console.log(enc4); //%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
console.groupEnd()

// 인코딩된 문자열을 원래의 문자열로 역변환
console.group('decodeURIComponent');
  console.log(decodeURIComponent(enc1))// ;,/?:@&=+$#
  console.log(decodeURIComponent(enc2))//-_.!~*()'
  console.log(decodeURIComponent(enc3))//ABC abc 123
  console.log(decodeURIComponent(enc4))//자바스크립트
console.groupEnd()