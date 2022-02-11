// isNaN(value)
// is가 붙은 함수는 대부분 검사대상을 파라미터로 받아서 true,false를 리턴하는 함수

/* 
파라미터로 전달된 값이 NaN일 경우 true, 그렇지 않을 경우 false를 반환한다. 
-> 숫자가 아니면 true, 숫자가 맞다면 false
-> 숫자로 변환 가능한 형식일 경우 false

Javascript 의 다른 모든 값과 달리, NaN은 같음 연산(==,===)을 사용해 판별할 수 없다.
그래서 NaN여부를 판별하는 함수가 필요하다.
*/

// 숫자로 변환할 수 없다고 판단하는 경우 true
console.log(isNaN(NaN))
console.log(isNaN(undefined))
console.log(isNaN({}))
console.log(isNaN('blabla'))
console.log(isNaN('123ABC'))

// 숫자로 변환할 수 있다고 판단하는 경우 false
console.log(isNaN(true)) // 1
console.log(isNaN(null)) // 0
console.log(isNaN(34)) 
console.log(isNaN('34')) // ''를 없애면 숫자가 되기 때문에 숫자로 변환
console.log(isNaN('34.34')) // js는 소수, 정수 구분없이 숫자기때문에
console.log(isNaN('')) // 빈 문자열은 0
console.log(isNaN('    ')) // 공백만으로 구성된 문자열은 0

/*
if문에서 
false, 0 , '' > false
true, 1, '234' > true
*/