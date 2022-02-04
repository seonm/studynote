// 얕은 복사
// const arr1 = [10, 20, 30, 40, 50];
// const arr2 = arr1; 

// arr2[1] = 100;

// console.log(arr1)
// console.log(arr2)


// 깊은 복사
const arr1 = [10, 20, 30, 40, 50];

// 방법1
// const arr2 = new Array(5); 
// arr2[0] = arr1[0];
// arr2[1] = arr1[1];
// arr2[2] = arr1[2];
// arr2[3] = arr1[3];
// arr2[4] = arr1[4];

// 방법2
const arr2 = arr1.slice();

arr2[1] = 100;

console.log(arr1)
console.log(arr2)