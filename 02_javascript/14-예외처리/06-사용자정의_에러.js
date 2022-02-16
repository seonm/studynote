// 여기서 사용자란 개발자를 의미한다.
/* 
에러의 종류를 세분화 하기 위해 기본 Error클래스의 기능을 확장하여
개발자가 직접 에러에 대한 경우의 수를 정의할 수 있다.
*/

class XlessError extends Error{
  // 자식 클래스가 생성자를 갖을 경우 부모의 생성자를 반드시 강제 호출 해야한다. > super(...)
  constructor(msg){
    super(msg);
    super.name = 'XlessError'
  }
}
class YlessError extends Error{
  constructor(msg){
    super(msg);
    super.name = 'YlessError'
  }
}

function foo(x,y){
  if(x < 0){
    throw new XlessError('x가 0보다 작습니다.')
  }
  if(y < 0){
    throw new YlessError('y가 0보다 작습니다.')
  }
  return x + y;
}

const a = null;
const b = null;

try{
  a = foo(-1, 10);
}catch(err){
  console.log(`에러이름 : ${err.name}`) // 에러이름 : Error
  console.log(`에러내용 : ${err.message}`) // 에러내용 : x가 0보다 작습니다.
}

try{
  a = foo(10, -1);
}catch(err){
  console.log(`에러이름 : ${err.name}`) // 에러이름 : Error
  console.log(`에러내용 : ${err.message}`) // 에러내용 : y가 0보다 작습니다.
}

console.log(a) // null
console.log(b) // null
