"use strict"; 
// 엄격모드 적용 > ES6가 등장하면서 함께 추가된 ES5의 변경사항을 활성화 시킴
//ES6 호환기능만 사용하도록 명시

// 메시지 그룹핑
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

