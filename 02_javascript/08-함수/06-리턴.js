function getTimes(x, y){
  const z = x * y;
  return z;
}

const a = getTimes(123, 45);
console.log(a); // 5535

const b = getTimes(123, 45) + 1000;
console.log(b) // 6535

console.log(getTimes(100, 20)) // 2000

