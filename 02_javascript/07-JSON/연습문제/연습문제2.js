const exam = {
  "철수": [89, 82, 79, 91],
  "민영": [91, 95, 94, 89],
  "남철": [65, 57, 71, 64],
  "혜진": [82, 76, 81, 83]
}

let sumMath = 0;
let avgMath = 0;

for(let i in exam){

  let sum = 0;
  let avg = 0;
  //console.log(exam[i])
  for(let j = 0; j < exam[i].length; j++){
    sum += exam[i][j]

    if(j = 3){
      sumMath += exam[i][j]
    }
    
  }
  avg = sum / exam[i].length
  console.log(exam[i] + '의 총점은 ' + sum + '이고 평균은 '+ avg+ '점 입니다.')
}

people = Object.getOwnPropertyNames(exam).length

avgMath = sumMath / people;

console.log('모든 학생의 수학 총점은 ' + sumMath +'이고 평균은 '+ avgMath + '점 입니다.' )
