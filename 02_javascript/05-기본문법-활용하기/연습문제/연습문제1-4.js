// # 기본문법 활용하기 연습문제

// ## 문제 1.

// for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

console.group('Q1')

for(let i = 9; i > -1; i--){

    if(i % 2 == 1){
        console.log(i)
    }

}

console.groupEnd()

console.group('Q1-1')

for(let i = 9; i >= 0; i-=2){
    console.log(i)
}

console.groupEnd()

// ## 문제 2.

// while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
console.group('Q2')

let i = 9;
while(i > -1){
    if(i % 2 == 1 ){
        console.log(i)
        
    }
    i--
}

console.groupEnd()

console.group('Q2-1')

let i = 9;
while(i > -1){
    console.log(i)
    i-=2
}

console.groupEnd()

// ## 문제 3.

// 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
// 변수의 초기화 - 최초로 값을 할당하는 처리를 의미
// 합계를 구하기 위해서는 0으로 초기화 된 변수가 필요하다.

console.group('Q3')

    let sum = 0;
    for(let i = 1; i < 20; i++){
        if(i % 2 == 0 || i % 3 == 0){
            sum += i
        }
    }
    console.log(sum)

console.groupEnd()

// ## 문제 4.

// 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하고 경우의 수는 총 몇가지 인지를 아래와 같이 출력하는 코드를 작성하시오.

// ```
// [ 1, 5 ]
// [ 2, 4 ]
// [ 3, 3 ]
// [ 4, 2 ]
// [ 5, 1 ]
// 경우의 수는 5개 입니다.
// ```


console.group('Q4')
let num = '';// 갯수를 셀 경우 0으로 초기화 된 변수가 필요하다.

for(i = 1; i < 7; i++){//첫번째 주사위 반복
    for(j = 1; j < 7; j++){//두번째 주사위 반복
        if(i + j == 6){
            console.log('[%d, %d]',i,j);
            num++//조건이 충족될때마다 1씩 증가(갯수 세기)
        }
    }
}
console.log('경우의 수는 %d개 입니다.',num)

console.groupEnd()