//학생이름 배열
const student = ['둘리', '도우너', '또치', '희동'];

//성적표 배열
const grade = [
  [78, 89, 96],
  [62, 77, 67],
  [54, 90, 80],
  [100, 99, 98]
];
// 학생별 총점과 학생별 평균 점수를 저장할 변수
let sum = 0, avg = 0;

// 학생별 평균점수의 총 합
let classSum = 0;

// 반평균
let classAvg = 0;

// 총점과 평균 구하기
//학생별 반복처리
for(let i = 0; i < grade.length; i++){
  // 학생별 총점은 이 위치에서 변수가 초기화 되어야 한다.
  // 합계를 위한 변수가 이미 선언되어 있으므로 중복선언을 피하기 위해서 기존의 변수를 0으로 리셋만 한다.
  sum = 0;

  // 각 학생의 과목별 반복처리
  for(let j = 0; j < grade[i].length; j++){
    sum += grade[i][j]
  }

  // 평균은 학생 한명의 총점을 한명이 응시한 과목수(=배열의 길이)로 나눈다.
  avg = sum / grade[i].length;

  // 반점수 구하기
  classSum += sum

  // 반평균 구하기
  classAvg += avg

  // 소수점 둘째자리까지 표현하기
  // toFixed()함수로 소수점을 처리한 결과는 문자열이기 때문에 숫자연산이 불가능하므로
  // toFixed()함수 적용 전에 반 점수를 구해야 한다.
  avg = avg.toFixed(2)
  
  // student[i]가 학생 한명의 이름, grade[i]는 학생 한명의 점수
  console.log(`${student[i]} 총점 : ${sum}, 평균 : ${avg}`)
  
}

classAvg = classAvg / student.length;
classAvg.toFixed(2);
console.log('반총점은 ' + classSum + ' 반평균은 ' + classAvg + '점')


// 결과
// 둘리 총점 : 263, 평균 : 87.67
// 도우너 총점 : 206, 평균 : 68.67
// 또치 총점 : 224, 평균 : 74.67
// 희동 총점 : 297, 평균 : 99.00
// 반평균은 82.5점