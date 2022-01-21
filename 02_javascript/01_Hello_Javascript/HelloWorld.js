"use strict"; // 엄격모드 적용 > ES6 호환기능만 사용하도록 명시

console.group('MyMessage1');
    console.log('hello. javascript');
    console.log('hello. javascript');
    console.log('hello. javascript');
console.groupEnd();

console.group('MyMessage1');
    console.log('hello. javascript 1');
    
    console.group('2-1');
        console.log('hello. javascript');
    console.groupEnd();
console.groupEnd();
