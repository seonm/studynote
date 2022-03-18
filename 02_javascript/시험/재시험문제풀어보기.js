// Q1
function q1(){
  let sum = ''
  let i = '0'
  while(i<5){
    sum += '*'
    i++
    console.log(sum)
  }
}
// Q2
function q2(){
  const names = ['재석', '민영', '종민','광수','승기','새정']
  const points = [82, 91, 54, 62, 88, 90]
  
  for(let i = 0; i<points.length-1;i++){
    for(let j = i+1; j<points.length;j++){
      if(points[i] < points[j]){
        let a =points[i];
        points[i] = points[j];
        points[j] = a;
  
        let b =names[i];
        names[i] = names[j];
        names[j] = b;
      }
    }
  }
  console.log(points, names)
}

//Q3
function q3(){
  const a = 'Life is too short, You need Javascript';
  let i = 0;
  let count = 0;

  a.split('');

  while(i<a.length){
    a[i] == 'e' ? count++:count
    i++
  }
  console.log(count)
}

//Q4
function q4(){
  const a = {
    '소니알파A5100' : 283890,
    '캐논EOS100D' : 299990,
    '캐논EOS5DMark3' : 137990,
    '캐논PowerShotG7XMark2' : 535000,
    '캐논EOSM10' : 227560,
    '소니알파A6000' : 465300,
    '소니알파A5000':300000,
    '캐논EOSR':1890630,
    '소니알파A72':942670,
    '캐논EOSR6':2898970
  }
  const money = 1500000;
  let count = 0;
  for(let i in a){
    a[i] < money ? count++:count
  }
  console.log(count)
}

//q5
function q5(){
  let start = 100
  let m = parseInt(start);
  let count = 0;

  while(m > 0){
    m = Math.floor(m * (3/5))
    count++
  }
  console.log(count - 1)
}
//q6
function q6(){
  let a = [];
  for(let i=0;i<10000;i++){
    a.push(i+1)
  }
  let count = 0;
  a.map((v)=>{
    while(v>0){
      v%10 == 8 ? count++ : count;
      v = Math.floor(v/10);
    }
  })
  console.log(count)
}
q6()