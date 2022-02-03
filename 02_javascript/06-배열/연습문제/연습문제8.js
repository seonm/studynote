const arr = [5, 3, 2, 8, 9];
console.log('before -->' + arr)

// 역순 배치 공식
// 1) 배열길이/2 만큼만 반복
// 2) i번째와 길이-i-1번째를 맞교환
for(let i = 0; i < parseInt(arr.length / 2); i++){
  var tmp = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = tmp;
}

console.log('after -->' + arr)