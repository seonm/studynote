// 형변환(type casting) 
// 데이터타입변환 : 문자 > 숫자  , 숫자 > 문자
// float 실수 int(integer) 정수

/*
parseFloat(value)
주어진 값에서 변환한 부동소수점 수(실수)를 리턴.
변환할 수 없으면 NaN을 리턴
*/

// 정상적인 경우
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2')); // 지수표현 e-2 = 10에 -2제곱, e+2 10에 2제곱 
console.log(parseFloat('0.0314E+2'));
// -면 소숫점 왼쪽으로 땡기고 +는 소숫점 오른쪽으로 땡김

// NaN반환
console.log(parseFloat('FF2'));