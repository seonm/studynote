
// ## 문제1.

// 자신의 이메일 주소를 `email` 이라는 변수에 저장하고 `@`를 기준으로 아이디와 도메인 부분을 분리하여 출력하시오.


// ### 출력결과

// 이메일이 leekh4232@gmail.com 인 경우

// ```
// leekh4232
// gmail.com
// ```

const email = 'jsm760@naver.com'
const arr = email.split('@');
for(let a in arr){
  console.log(arr[a])
}
