let one = 0; // 홀수합
let two = 0; // 짝수합

// i가 1~10까지 1씩 증가하는 동안 반복
for (let i = 1; i < 11; i++){
    // 반복문 안에서의 조건문은 주로 반복문의 초기식 변수(i)에 대한 경우의 수를 판별한다.
    if( i % 2 == 0){
        two += i;
        console.log('%d 는 짝수', i)
    }else{
        one += i;
        console.log('%d 는 홀수', i)
    }
}
console.log('1~10까지 홀수들의 합 %d',one) // 25
console.log('1~10까지 짝수들의 합 %d',two) // 30