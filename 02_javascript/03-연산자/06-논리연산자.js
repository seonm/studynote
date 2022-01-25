// 1. and
// 전체가 true일 경우에만 true 반환

console.group('1. and');
    console.log(true && true); // true
    console.log(true && false); // false
    console.log(false && true); // false
    console.log(false && false); // false
console.groupEnd();

// 2. and연산 여러개
console.group('2. and연산 여러개');
    console.log(true && true && true); // true
    console.log(true && true && false); // false
    console.log(false && false && true); // false
    console.log(false && true && true); // false
console.groupEnd();

// 3. or
// 하나라도 true 일 경우 true 반환
console.group('3. or');
    console.log(true || true); // true
    console.log(true || false); // true
    console.log(false || true); // true
    console.log(false || false); // false
console.groupEnd();

// 4. or연산 여러개
console.group('4. or연산 여러개');
    console.log(true || true || true); // true
    console.log(true || true || false); // true
    console.log(false || false || true); // true
    console.log(false || true || true); //true
    console.log(false || false || false); // false
console.groupEnd();

// 5. 복합사용
//&& 가 || 보다 항상 우선한다.
console.group('5. 복합사용');
    console.log(true && true || true); // true
    console.log(true && true || false); //true
    console.log(false && false || true); //true
    console.log(false && true || true); //true

    console.log(true || true && true) // true
    console.log(true || true && false) // true
    console.log(false || false && true) // false 
    console.log(false || true && true) //true
console.groupEnd();

// 6. not
console.group('6. not')
    let success = true;
    let fail = !success;
    console.log(fail) // false

    let k = 1;
    console.log(!k); //false : 1은 true이니까

    let l = 0;
    console.log(!l); //true : 0은 false니까

    let str1 = 'Hello';
    console.log(!str1); //false : 0빼곤 다 true

    let str2 = "";
    console.log(!str2) //true : '' 아무것도 입력하지 않은 값은 0(false)
console.groupEnd();