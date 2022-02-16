// 조건문을 사용한 고전적 예외처리
// 프로그램이 실행되기에 적합하지 않은 파라미터가 전달된 경우 미리 약속된 값을 리턴
// -> 프로그램의 성공, 실패 여부를 리터값으로 판단하는 경우
function foo(x,y){
  if(x < 0 && y < 0){
    return 0;
  }
  return x + y;
}

// 정상 호출 상황
console.log(foo(10, 20));
// 비정상 호출 상황
console.log(foo(-1, -2));

// 비정상 상황에 대한 고전적 처리 방법
const k = foo(-1,-2);
if(k == 0){
  console.log('x와 y가 0보다 작습니다.')
}else{
  console.log(k)
}