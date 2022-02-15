// 랜덤함수
function random(n1, n2){
  return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

// 0개의 원소를 갖는 배열
const lotto = [];
console.log(lotto);

// i번째 원소 결정 6회 반복 수행
for(let i=0;i<6;i++){
  console.log(`${lotto}`);
  // 중복되지 않는 숫자가 몇 번째에 생성될지 알 수 없으므로 무한반복
  while(true){
    //랜덤한 숫자
    const rnd = random(1,45);

    //rnd값이 lotto배열안의 원소와 중복되지 않는다면?
    if(!lotto.includes(rnd)){
      console.log(`${rnd}는 중복되지 않는다.`)
      lotto.push(rnd);
      break;
    }else{
      console.log(`${rnd}는 중복된다.`)
    }
  }
}
console.log(`${lotto}`);