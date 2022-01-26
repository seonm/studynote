//1. Switch 기본 구문
// 조건에 맞는 case 블록부터 break 키워드를 만날때까지 실행한다.
console.group('1. Switch 기본 구문');

const korean = 'B';

switch(korean){
    case 'A':
        console.log('A');
        break;
    case 'B': 
        console.log('B');
        break
    case 'c':
        console.log('C');
        break;
    default: 
        console.log('C 미만');
        break;
}
console.groupEnd();



//2. break가 없는 구문
console.group('2. break가 없는 구문');
    const eng = 'B';

    switch(eng){
        case 'A':
            console.log('A');
        case 'B':
            console.log('B');
        case 'C':
            console.log('C');
        default:
            console.log('C 미만');
    }
console.groupEnd();

//3. 의도적으로 break 조절하기
// case 는 다르지만 수행해야할 로직이 동일한 경우 의도적으로 break의 위치를 조절할 수 있다.
console.group('3. 의도적으로 break 조절하기');
    const math = 'B';

    switch(math){
        case 'A':
        case 'B':
        case 'C':
            console.log('Pass');
            break;
        default:
            console.log('Not Pass');
            break;
    }
console.groupEnd();


//4. break의 조건을 식으로 설정하는 경우
// 수식이 비교식이므로 case는 true, false 로만 나눠진다.

console.group('4. break의 조건을 식으로 설정하는 경우');
    const sci = '72';

    switch(sci > 70){
        case true:
            console.log('Pass');
            break;
        default:
            console.log('Not Pass');
            break;
    }
console.groupEnd();