const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};
const bloods = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']

for(const blood of bloods){
  if(blood == 'A'){
    result.A++
  }else if(blood == 'B'){
    result.B++
  }else if(blood == 'AB'){
    result.AB++
  }else{
    result.O++
  }
}
console.log(result)
