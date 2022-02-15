/* 1. 배열 탐색하기*/
let arr1 = [1, 0, false];

// arr.indexOf(item, from)는 인덱스를 from부터 시작해 item(요소)를 찾는다.
// 요소를 발견하면 해당 요소의 인덱스를 반환한다.
// arr.lastIndexOf(item,from)는 위 메서드와 동일한 기능을 하는데 검색을 끝에서부터 시작한다.
// 두번째 파라미터(from)이 없으면 처음부터 탐색한다.
console.log(arr1.indexOf(0)) //1
console.log(arr1.indexOf(false)) //2
console.log(arr1.indexOf(null)) //요소를 발견하지 못했을때 -1반환

// arr.includes(item,from)는 인덱스르 from부터 시작해 포함하고 있는지 여부를 boolean으로 반환
console.log(arr1.includes(1))// 발견시 true
console.log(arr1.includes(1000))// 없을시 false

// 위 메서드들은 요소를 찾을 때 완전 항등 연산자(===)을 사용한다.
// false를 검색하면 정확히 false만을 검색하고 0은 검색되지 않는다.
// 요소의 위치없이 존재여부만 확인하려면 includes를 사용하는게 좋다.
// includes는 NaN도 제대로 처리한다는 점에서 indexOf/lastIndexOf와 약간의 차이가 있다.
const arr2 = [NaN];
console.log(arr2.indexOf(NaN)) //-1(완전 항등 비교 === 은 NaN에 동작하지 않으므로 값이 출력되지 않는다.)
console.log(arr2.includes(NaN))// true(NaN의 여부를 확인한다.)

/* 2. 배열검색 */
const arr3 = [5, 12, 8, 131, 44];

// 주어진 판별함수를 만족하는 첫번째 값을 반환, 못찾으면 undefined
// 찾고자 하는 항목이 아닌 검색규칙을 구현한 콜백함수를 파라미터로 전달해야한다.
const found = arr3.find(function(v){
  
  // 파라미터로 전달되는 v는 배열의모든 원소가 순차적으로 전달된다.
  //console.log(v); 5 12 8 131 44

  // v를 우리가 원하는 조건에 충족하는지 검삭하여 true, false를 리턴
  // true를 리턴하는  순간 배열의 탐색을 중단한다.(break와 동이한 기능)
  if(v%2 == 0){
    return true; // true가 리턴되는 경우 v는 found에 저장된다.
  }else{
    return false; // false가 리턴되는 경우 v는 버려진다.
  }
})
console.log(found)

// 배열 전체 검색
const arr4 = [5, 12, 8, 131, 44];
const resultes = arr4.filter(function(v, i, arr){
  console.log(`인자=${v}, 인덱스=${i}, 배열전체=${arr}`)

  if(v % 2 == 0){
    // true가 리턴되는 경우 v는 results 배열의 원소로 저장된다.
    // true를 리턴하더라도 배열의 모든 원소를 탐색하기 전까지는 종료되지 않는다.
    return true;
  }else{
    // false 리턴시 v는 버려진다.
    return false
  }
});
console.log(resultes);//[ 12, 8, 44 ]

/* 3. 배열 정렬 */
const arr5 = [2, 1, 15];
// 퀵 정렬 알고리즘을 사용하여 배열 자체를 정렬한다.
// > 배열의 모든 원소를 문자열로 취급하기 때문에 글자 정렬기준이 적용된다.
arr5.sort();
console.log(arr5)//[ 1, 15, 2 ]

// sort 함수도 정렬 조건을 콜백함수로 처리한다.
arr5.sort(function(a,b){
  // 정렬을 위해 비교되는 원소값들이 파라미터로 전달된다.
  console.log(`a=${a}, b=${b}`);

  // 리턴값이 양수인 경우 : a가 b보다 크다.
  // 리턴값이 음수인 경우 : b가 a보다 크다.
  if(a > b){
    return 1;
  }else{
    return -1
  }
});
console.log(arr5);//[ 1, 2, 15 ]

// 역순 배치
let arr6 = [1,2,3,4,5];
arr6.reverse();
console.log(arr6);