const RegexHelper = require('./RegexHelper');

// 회원가입시 입력받은 값을 가정한 변수
// 사용자가 입력한 모든 내용은 문자열 변수이다.
const userName = '자바스크립트';
const age = '2ddd0';
const userId = 'js123';

// 입력값 검사를 수행하기 위한 객체
const regex = new RegexHelper();

// 입력값의 형식검사 수행
try {
  regex.kor(userName, '이름은 한글로만 입력하세요.');
  regex.maxLen(userName, 20, '이름은 최대 20자까지만 입력가능합니다.');
  regex.num(age, '나이은 숫자로만 입력하세요.');
  regex.engNum(userId, '아이디은 영문과 숫자의 조합으로만 입력하세요.');
  regex.maxLen(userId, 20, '아이디는 최대 20자까지만 입력가능합니다.');
}catch(err){
  console.group('%s 에러코드 발생', err.name);
    console.error('에러코드 : %d', err.statusCode)
    console.error('에러내용 : %s', err.message)
  console.groupEnd();
}