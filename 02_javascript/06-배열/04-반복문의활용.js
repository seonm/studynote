//5칸으로 구성된 빈 배열 생성
const myArr = new Array(5);
console.log(myArr)//[ <5 empty items> ]

//배열의 길이
const len = myArr.length;
console.log(len)//5

//0부터 배열의 길이(5)보다 작은 동안 반복
//0~4
for (let i = 0; i<5; i++){
  myArr[i] = i * 10
}
console.log(myArr)//[ 0, 10, 20, 30, 40 ]