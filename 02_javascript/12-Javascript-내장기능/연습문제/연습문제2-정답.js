const ssn = '020517-3******';

const date = new Date();
const now_year = date.getFullYear();

let yy = parseInt(ssn.substring(0,2));
let mm = parseInt(ssn.substring(2,4));
let dd = parseInt(ssn.substring(4,6));
let gender = parseInt(ssn.substring(7,8));

//console.log(yy,mm,dd,gender);

// 2000년도 이전 출생자의 주민번호 뒷자리 -> 1,2
// 2000년도 이후 출생자의 주민번호 뒷자리 -> 3,4
yy = (gender > 2) ? yy + 2000 : yy + 1900;

// 나이 계산
const age = now_year - yy + 1;

// 성별 확인
const sex = (gender % 2) ? '남자':'여자';
console.log(`${yy}년 ${mm}월 ${dd}일에 태어난 ${age}세 ${gender}입니다.`)