//원소값을 무작위로 갖는 배열
const data = [5,2,7,9,2];

//비교를 위해 배열의 첫번째 원소를 변수로 지정
let max = data[0];

//data의 첫번째 원소 5는 비교를 위한 변수로 지정되었기때문에
//그다음 원소부터 비교하기 위해서 i를 0이 아닌 1로 지정
//1~마지막까지 반복
for(let i = 1; i < data.length; i++){
  
  console.log('max %d, data[%d]=%d', max, i, data[i]);

  // max가 data의 i번째 보다 작다면 i번째 원소를 max에 복사
  // 비교식의 부등호 방향만 반대로 지정하면 최소값을 구할 수 있다.
  if(max < data[i]){
    console.log(`max에 ${data[i]}를 복사`)
    max = data[i]
  }
}
console.log(`최대값 ${max}`)

let min = data[0];
for(let i=1; i < data.length; i++){
  if(min>data[i]){
    min = data[i]
  }
}
console.log(`최소값 ${min}`)