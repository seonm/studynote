function printStar(max, current=1) {
  // max는 최대 행 수, current는 현재 행의 수 를 의미
  // 현재 행의 수가 최대 행보다 크다면 처리 중단을 위해 return
  if(current > max){
    return;
  }else{
    // 한 줄을 출력하기 위한 코드 구성
    let star = '';
    for(let j = 0; j<current; j++){
      star += '*'
    }
    console.log(star);
    printStar(max, current+1);
  }
}

printStar(5);

// 재귀함수는 하나의 반복문만을 대신할 수 있다.