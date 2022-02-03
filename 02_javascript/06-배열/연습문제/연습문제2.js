var grade = [75, 82, 91]; // 성적표 배열
var sum = 0, avg = 0; // 총점과 평균점수 변수 생성

//총점구하기
// for(let i = 0; i < grade.length; i++){
//   sum += grade[i];
// };

//또다른 반복문 패턴
for(const p of grade){
  sum += p
};

//평균구하기
avg = sum / grade.length;

avg = avg.toFixed(2);
// arr의 값을 소수점 n번째자리까지로 제한한다.

console.log('총점: ' + sum + '점, 평균점수: ' + avg + '점');

