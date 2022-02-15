// 하단 예제들이 for문보다 실행속도가 빠르다.
// 배열의 반복에서 중단할일 있으면 some, 없으면 forEach, 복제 map

// 배열을 탐색하는 방법

// 테스트를 위한 배열 선언
let arr = [10, 20, 30, 40, 50];

// 배열에대한 반복 처리
// 1. 배열의 원소 스캔

for(let i = 0; i <arr.length; i++){
  if(i == 3){
    console.log('반복중단');
    break;
  }
  console.log(`${i}번째 원소 ${arr[i]}`)
}
console.log('------------')

// 콜백 함수에게 배열의 값과 인덱스를 전달하낟.
// 콜백함수는 원소의 수 만큼 순차적으로 실행된다.
arr.forEach((v,i) => {
  if( i == 3){
    console.log('반복중단');
    // break;
    // 콜백함수 역시 함수이므로 break를 사용해 중단 할 수 없다.
    // break 는 for, while문 안에서만 사용가능하다.
    return;
    // forEach의 콜백함수에서 반복을 중단하고 return을 사용할 경우
    // 현재 동작중인 콜백만 종료될 뿐 전체반복은 계속된다.
  }
  console.log(`${i}번째 원소 ${v}`)
});

console.log('------------')

// 배열에대한 반복 처리
// 2. 탐색 중단

arr.some((v,i)=>{
  // some 함수는 콜백함수가 true를 리턴하는 순간 순환을 중단한다.
  if(i==3){
    console.log('반복중단');
    return true;
  }
  console.log(`${i}번째 원소 ${v}`)

})

console.log('------------')

// 배열에대한 반복 처리
// 3. 콜백함수에서 리턴하는 값들을 하나의 배열로 묶기

// 전통적인 방법
const d1 = [];
for(let i=0; i<arr.length; i++){
  if(arr[i] % 4 == 0){
    d1.push(arr[i]);
  }
}
console.log(d1);

console.log('------------')

// forEach 사용
const d2 = [];
arr.forEach((v,i)=>{
  if(v % 4 == 0){
    d2.push(v)
  }
})
console.log(d2);

console.log('------------')

// map 사용
// map함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서 hello에 저장
// 원소를 각각 복사하는 것이므로 깊은 복사

// const hello = arr.map(function(v,i){
//   return v+1;
// })

// 콜백 함수를 화살표함수로 변환(ES6)
// const hello = arr.map((v,i)=>{
//   return v+1;
// })
// 한 줄 인경우 {}, ; , return 생략
const hello = arr.map((v,i)=>v+1);
console.log(hello)
