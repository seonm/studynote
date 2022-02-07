function printRevStar(max) {
  for(let i = 0; i < max; i++){
    let star = ''
    // 별을 역순으로 출력하기 위한 j값의 조건식을 구성해야한다.
    for(let j = 0; j < max-i; j++){
      star += '*'
    }
    console.log(star)
  }
}

printRevStar(5)
