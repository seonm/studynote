const data = [10, 20, 30, 40, 50];
// 총 합을 구할 때는 항상 누적 합산을 수행할 변수를 0으로 초기화시킨뒤
// 반복을 수행해야 한다.

let sum = 0;

//배열의 모든 원소에 대한 반복문 구성
for (let i = 0; i < data.length; i++){
  //i번째 원소를 sum에 누적 합산
  sum += data[i]
}
console.log('데이터의 총합은 %d',sum)//5

// 평균 : 총합을 원소의 길이로 나눈 값

const avg = sum / data.length;
console.log('데이터의 평균은 %d', avg)//30