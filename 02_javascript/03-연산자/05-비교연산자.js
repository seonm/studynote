// 1. 이상, 이하, 미만, 초과

let x = 100;
let y = 50;

let compare1 = x >= y; // 이상
let compare2 = x > y; // 초과
let compare3 = x <= y; // 이하
let compare4 = x < y; // 미만

console.group('1. 이상, 이하, 미만, 초과')
    console.log(compare1) // true
    console.log(compare2) // true
    console.log(compare3) // false
    console.log(compare4) // false
console.groupEnd()

// 2. 같다.

let a1 = "1";
let a2 = 1;
let a3 = 1.0;
let a4 = true;

console.group('2. 같다.')

    console.group('== 내용만 비교')
        console.log(a1 == a2); // true
        console.log(a1 == a3); // true
        console.log(a1 == a4); // true //true = 1, false = 0
        console.log(a2 == a3); // true
        console.log(a2 == a4); // true
        console.log(a3 == a4); // true
    console.groupEnd()

    console.group('=== 내용 + 데이터타입 비교')
        console.log(a1 === a2); // false
        console.log(a1 === a3); // false
        console.log(a1 === a4); // false
        console.log(a2 === a3); // true
        console.log(a2 === a4); // false
        console.log(a3 === a4); // false
    console.groupEnd()

console.groupEnd()


//3. 다르다
console.group('3. 다르다.')

    console.group('!= 내용만 비교')
        console.log(a1 != a2); // false
        console.log(a1 != a3); // false
        console.log(a1 != a4); // false
        console.log(a2 != a3); // false
        console.log(a2 != a4); // false
        console.log(a3 != a4); // false
    console.groupEnd()

    console.group('!== 내용 + 데이터타입 비교')
        console.log(a1 !== a2); // true
        console.log(a1 !== a3); // true
        console.log(a1 !== a4); // true
        console.log(a2 !== a3); // false
        console.log(a2 !== a4); // true
        console.log(a3 !== a4); // true
    console.groupEnd()

console.groupEnd()
