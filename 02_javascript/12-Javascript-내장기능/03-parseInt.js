/*

parseInt(value, int)

- 첫번째 파라미터를 10진 정수값으로 변환한다.
- 변환할 수 없다면 NaN을 반환.
- 두 번째 파라미터는 value가 어떤 진법인지를 알려주는 값(생략시 기본값=10);
- 문자열의 선행 공백은 무시한다.
- 숫자 + 글자 형태의 문자열은 숫자 부분만 취한다. 나머지 무시
- 글자 + 숫자 형태의 문자열은 변환불가 - NaN반환
- 소수점을 포함하고 있을 경우 정수 부분만 취하고 나머지 무시
*/

// 10진법 : 0,1,2,3,4,5,6,7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21 -> ex. 12
// 16진법 : 0,1,2,3,4,5,6,7, 8, 9, A, B, C, D, E, F,10,11,12,13,14,15 -> ex. 0x12
// 8진법  : 0,1,2,3,4,5,6,7,10,11,12,13,14,15,16,17,20,21,22,21,24,25 -> ex. 0o12

//15로 변환되는 예제들
console.log(parseInt(' 0xF',16));
console.log(parseInt(' F',16));
console.log(parseInt('17',8));
console.log(parseInt('015',10)); // 따옴표를 제거하고 015는 15와 통일
console.log(parseInt(15.99,10)); // 소수점이하 버림
console.log(parseInt('15.123',10)); // ,는 단순한 문자열이므로 이후 버림
console.log(parseInt('FXX123',16)); // 16진수기준 정상숫자인 F는 인식되지만 X는 문자열이므로 이후 버림
console.log(parseInt('1111',2));
console.log(parseInt('15*3',10)); // 문자열에서 *는 단순글자이므로 이후 버림
console.log(parseInt('15e2',10)); // 문자열 e이후 버림
console.log(parseInt('15px',10)); // 문자열 px 이후 버림

// -15를 반환하는 예제들

console.log(parseInt('-0xF',16));
console.log(parseInt('-0F',16));
console.log(parseInt('-F',16));
console.log(parseInt('-17',8));
console.log(parseInt('-15',10));
console.log(parseInt(-15.1,10));
console.log(parseInt('-1111',2));

// NaN을 반환하는 예제들
console.log(parseInt('HELLO', 8)); // 전부 숫자 아님
