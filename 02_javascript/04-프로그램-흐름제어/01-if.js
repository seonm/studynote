// 1. 논리값 사용
console.group('1. 논리값 사용');

    // 일반구문 - 무조건 실행됨.
    console.log('배고픈데');

    // 조건문에서 사용할 조건값 생성
    const have_money = true;
    //const have_money = false;

    if(have_money){
        console.log('식당에서')
    }

    console.log('밥을 먹자')

console.groupEnd();

// 2. 숫자형 값 사용
console.group('2. 숫자형 값 사용');

    const money1 = 10000;//true
    //const money1 = 0;//false

    if(money1){
        console.log('택시타고')
    }

    console.log('집에가자')

console.groupEnd();

// 3. 비교식 사용
console.group('3. 비교식 사용');

    const money2 = 12000;
    //const money2 = 3000;

    if(money2 >= 5000){
        const k = money2 - 5000;
        console.log('선물을 사고 %d원 남는다.', k);
    }

console.groupEnd();


// 4. 논리식 사용(AND)
console.group('4. 논리식 사용(AND)');

    const x1 = true;
    const y1 = true;

    if(x1 && y1){
        console.log('x1 && y1 조건은 true입니다.')
    }

    const x2 = true;
    const y2 = false;

    if(x2 && y2){
    console.log('x2 && y2 조건은 false입니다.')
    }
    //실행되지 않음
    //AND(&&)연산은 하나라도 false가 포함되어 있다면 출력되지 않는다.

console.groupEnd();

// 5. 논리식 사용(OR)
console.group('5. 논리식 사용(OR)');

    const x3 = true;
    const y3 = true;

    if(x3 || y3){
        console.log(('x3 && y3 조건은 true입니다.'))
    }

    const x3 = true;
    const y3 = false;

    if(x3 || y3){
        console.log(('x3 && y3 조건은 true입니다.'))
    }
    //OR(||)연산은 모든 값이 false인 경우에만 false 출력

console.groupEnd();


// 6. Not 연산
console.group('6. Not 연산');

    const a = true;

    if(!a){
        console.log('Hello False')
    }
    //조건 false이므로 출력되지 않음.

    const b = false;

    if(!b){
        console.log('Hello True')
    }
    //조건 true이므로 출력됨

console.groupEnd();

// 7. 논리식 Not
console.group('7. 논리식 Not');

   const x5 = true;
   const y5 = false;

   if(!(x5 && y5)){
       console.log('!(x5 && y5) 조건은 true')
   }
   //x5 && y5 는 false 지만 !가 이를 부정해 true가 된다.

   const x6 = true;
   const y6 = false;

   if(!(x6 || y6)){
       console.log('!(x5 && y5) 조건은 false')
   }
   //x6 || y6 는 true 지만 !가 이를 부정해 false가 된다.

console.groupEnd();