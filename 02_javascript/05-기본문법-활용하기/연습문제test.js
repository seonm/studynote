const n = '2 4';
const nN = n.split(' ');
const a=parseInt(nN[0]);
const b=parseInt(nN[1]);
let result = 1;
for(let i=0;i<b;i++){
  result *= a
}
console.log(result)

console.log(Math.pow(parseInt(nN[0], 10), parseInt(nN[1], 10)));