
function solution(x){
  let strX = x.toString();
  let sum = 0;
  for(const i of strX){
    sum += Number(i);
  }
  if(x % sum === 0){
    return x = true;
  }else{
    return x = false;
  }
}
console.log(solution(10))
console.log(solution(12))
console.log(solution(11))
console.log(solution(13))