// 마지막 회차 생략

// 1. 조건식이 "변수 < 최대값" 인 경우의 조건 : 변수 + 1 < 최대값

console.group( "변수 < 최대값");

    for(let i = 0; i < 10; i++){ // i는 1~9까지
        if(i+1 < 10){
            console.log(i) 
        }
    }

console.groupEnd();

// 2. 조건식이 "변수 <= 최대값" 인 경우의 조건 : 변수 < 최대값

console.group("변수 <= 최대값");

    for(let i = 0; i <= 9; i++){ // i는 1~9까지
        if(i < 9){
            console.log(i) 
        }
    }

console.groupEnd();

// 1~9까지의 숫자 사이에 콤마를 넣어 한문장으로 결합하기.

console.group("숫자 사이에 콤마를 넣어 한문장으로 결합");

let numAll = '';

for(let i = 1; i < 10; i++){
    numAll += i 
    if(i < 9){
       numAll += ',';
    }
}
console.log(numAll)

console.groupEnd();