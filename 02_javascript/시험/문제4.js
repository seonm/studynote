function solution(K, N, M){
  const snackPrice = K * N;
  let parents = snackPrice - M;
  parents = parents > 0 ? parents : 0;
  return `동수가 부모님께 받아야 하는 돈은 ${parents}원입니다.`;
}
console.log(solution(30,4,100))
console.log(solution(250,2,140))
console.log(solution(20,6,120))
console.log(solution(20,10,320))