// 학생별 총점과 평균 구하기
/*
|이름|국어|영어|수학|
|철수|92|81|76|
|영희|72|95|84|
|민혁|80|86|98|*/

// 학생 성적표 배열
const grade = [
  ['철수', 92, 81, 76],
  ['영희', 72, 95, 84],
  ['민혁', 80, 86, 98]
];

// 이 위치에서 변수를 초기화 하면 모든 학생의 총점
let sum = 0;

for(let i=0;i<grade.length;i++){
  let personal = 0;
  let avg = 0;
  for(let j=1;j<grade[i].length;j++){
    personal += grade[i][j]
  }
  avg = personal / (grade[i].length-1);
  sum += personal
  console.log('%s의 개인 총점은 %d이고 평균은 %d이다.',grade[i][0],personal,avg)
}
console.log('모든학생의 점수의 합은'+ sum)
