// for ~ of 는 배열
// for ~ in 은 JSON

// 예제를 위한 임의의 JSON정의
const student = {
  studno: 10101,
  grade: 1,
  name: '학생',
  phoneno: '010-1234-2342'
}

// JSON이나 멤버변수를 갖는 객체에 대한 반복문
// JSON의 key와 value를 모두 스캔 할 수 있는 반복문
// -> 변수로 선언한 k에 객체의 key가 순차적으로 저장된다.
for(let k in student){
  console.log('key(k) = %s | value(student[k]) = %s ', k, student[k]);
  console.log('%s : %s \n', k, student[k])
}

