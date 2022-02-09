const m3 = {
  userName:'철민',
  email:'chulmin@naver.com'
}

//m3와 같은 구조를 갖는 m4를 정의
const m4 = m3;
console.log(m3); // { userName: '철민', email: 'chulmin@naver.com' }
console.log(m4); // { userName: '철민', email: 'chulmin@naver.com' }

//값의 변경
m3.userName = '민수';
m3.email = 'ms@gmail.com';
console.log(m3); // { userName: '민수', email: 'ms@gmail.com' }
console.log(m4); // { userName: '민수', email: 'ms@gmail.com' }
