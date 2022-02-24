function solution(num) {
  var answer = 0;
  for(i=0; i<500; i++){
    if (num == 1){
      break;
    }else if(!num == 1){
      continue;
    }
    if(num % 2 === 0){
      num = num / 2
    }else{
      num = num * 3 + 1
    }
    answer++
  }
  if(answer >= 500){
      return answer = -1
  }
  return answer;
}
console.log(solution(626331))
