function random(n1,n2){
  return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

//1~45사이의 범위의 1씩 증가하는 원소가 저장된 배열 balls 생성
const balls = new Array(45);

for(let i=0;i<balls.length;i++){
  balls[i] = i+1
}
//console.log(balls.length)
//6개의 빈 칸을 갖는 배열 lotto 생성
const lotto = new Array(6);
for(let i=0;i<lotto.length;i++){
  //console.log(balls);
  //balls의 index범위 안에서 랜덤한 값을 추출
  // index는 0부터 시작하므로 length - 1
  const rnd = random(0, balls.length-1);

  // balls 배열에서 랜덤한 값을 하나 추출해 lotto 배열의 값으로 단순 복사
  lotto[i] = balls[rnd];

  // rnd번째 위치에서 하나의 데이터를 잘라낸다.
  // splice(start,삭제갯수,추가할것)
  balls.splice(rnd,1);
}
console.log(lotto)
console.log(balls)