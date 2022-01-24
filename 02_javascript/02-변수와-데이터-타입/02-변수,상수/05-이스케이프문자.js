// 기본 데이터 타입
const num = 123;
const str = 'hello';
const bool = true;
// 추후 살펴보게 될 데이터 타입
const obj = new Date(); //객체
const arr = [1,2,3]; //Array (객체의 일종)
const json = {'a':123, 'b':234} //json (객체의 일종)

console.group('숫자값 출력하기')
    console.log('숫자값 출력하기=%d', num); //123
    console.log('숫자값 출력하기=%d', str); //NaN
    console.log('숫자값 출력하기=%d', bool); //1(참)
    console.log('숫자값 출력하기=%d', obj); //1643028653006
    console.log('숫자값 출력하기=%d', arr); //NaN
    console.log('숫자값 출력하기=%d', json); //NaN
console.groupEnd();

console.group('문자열 출력하기')
    console.log('문자열 출력하기=%s', num); //123
    console.log('문자열 출력하기=%s', str); //hello
    console.log('문자열 출력하기=%s', bool); //true
    console.log('문자열 출력하기=%s', obj); //2022-01-24T12:52:18.791Z
    console.log('문자열 출력하기=%s', arr); //[ 1, 2, 3 ]
    console.log('문자열 출력하기=%s', json); //{ a: 123, b: 234 }
console.groupEnd();

console.group('객체 출력하기')
    console.log('객체 출력하기=%o', num); //123
    console.log('객체 출력하기=%o', str); //'hello'
    console.log('객체 출력하기=%o', bool); //true
    console.log('객체 출력하기=%o', obj); //2022-01-24T12:53:33.628Z
    console.log('객체 출력하기=%o', arr); //[ 1, 2, 3, [length]: 3 ]
    console.log('객체 출력하기=%o', json); //{ a: 123, b: 234 }
console.groupEnd();

console.group('JSON 출력하기')
    console.log('JSON 출력하기=%j', num); //123
    console.log('JSON 출력하기=%j', str); //"hello"
    console.log('JSON 출력하기=%j', bool); //true
    console.log('JSON 출력하기=%j', obj); //2022-01-24T12:53:33.628Z
    console.log('JSON 출력하기=%j', arr); //[ 1, 2, 3]
    console.log('JSON 출력하기=%j', json); //{ "a": 123, "b": 234 }
console.groupEnd();