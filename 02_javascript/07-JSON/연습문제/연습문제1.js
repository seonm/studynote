const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};
const bloods = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']

for(const b of bloods){
  result[b]++;
}
console.log(result)



let result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0}
const bloods = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']

for(const blood of bloods){
  //result[blood] = result[blood]+ 1
  console.log(result[blood]) //  변수[key] = 값
  console.log(result[0])
  console.log(result.blood) // result에 blood라는 key 
  console.log(result['blood'])// result에 blood라는 key 
}
//console.log(result)