
// ## 문제2.

// 임의의 주민번호를 다음과 같이 `*`을 포함하여 변수에 저장하시오.

// ```
// ssn = '020517-3******'
// ```

// 또한 현재 년도를 now_year라는 변수로 저장하시오.

// 이 값을 사용하여 생년월일, 나이, 성별을 출력하시오.

// #### 출력결과

// ```
// 2002년 5월 17일에 태어난 20세 남자 입니다.
// ```
const ssn = '020517-3******'
const now_year = '2022';

const birth = `20${ssn.slice(0,2)}년 ${Number(ssn.slice(2,4))}월 ${Number(ssn.slice(4,6))}일`;
const age = now_year - ('20' + ssn.slice(0,2));
const gender = () => {
  if(ssn[7]==3 || ssn[7]==1){
    return '남자'
  }else{
    return '여자'
  }
}
console.log(`${birth}에 태어난 ${age}세 ${gender()}입니다.`)
