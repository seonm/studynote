const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};
const bloods = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']

// for(const b of bloods){
//   result[b]++;
// }
// console.log(result)

//json키 변수로 처리하기

for(const b of bloods){
  result[b]=result[b]+1
  //console.log(b)
}
console.log(result);