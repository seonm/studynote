// 멤버변수를 갖는 생성자를 통해서 객체 만들기
// 객체를 만들기위한 함수 : 생성자함수
// 생성자함수 User
// 구분위해 첫글자 대문자사용

function User(){
  // 멤버변수 정의하기
  // 일반적으로 멤버변수는 일반 변수와 구분하기 위해 언더바로 시작하는 이름을 갖는다.
  this._id = null;
  this._email = null;
}

// 생성자를 통한 객체 만들기
const foo = new User();
foo._id = 'hello';
foo._email = 'hello@javascript.com';
console.log(foo)
// 이때 foo는 리턴 받을 변수로 무조건적으로 객체가된다.
//User { _id: 'hello', _email: 'hello@javascript.com' }
console.log(User)
//[Function: User]

const bar = new User();
bar._id = 'world';
bar._email = 'bar@javascript.com';
console.log(bar);
//User { _id: 'world', _email: 'bar@javascript.com' }
console.log(foo)
//User { _id: 'hello', _email: 'hello@javascript.com' }

// User의 레이아웃만 가져오고 각자 독립적인 값을 유지한다.