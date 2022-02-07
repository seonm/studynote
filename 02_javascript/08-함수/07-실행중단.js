function returnBreak(x, y){
  if(x < 10){
    return -1
  }

  if(y < 10){
    return -2
  }

  return x + y;
}

// 첫번째 if문에 의해 처리가 중단되고 -1이 반환됨
console.log(returnBreak(1, 100)) // -1

// 두번째 if에 의해 처리가 중단되고 -2가 반환
console.log(returnBreak(100, 1)) // -2

// 정상 실행 됨
console.log(returnBreak(100, 20)) // 120