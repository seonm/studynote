const a = [1, 3, 5, 7, 9];
const b = [2, 4, 6];

const data = [a, b];
//console.log(data);//[ [ 1, 3, 5, 7, 9 ], [ 2, 4, 6 ] ]

for(let i=0;i<data.length;i++){
  console.log(data[i]);
  // [ 1, 3, 5, 7, 9 ]
  // [ 2, 4, 6 ]

  for(let j=0;j<data[i].length;j++){
    console.log(data[i][j])
  }
}