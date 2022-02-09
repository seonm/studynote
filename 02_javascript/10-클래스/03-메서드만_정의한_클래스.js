class Calc{
  plus(x, y){
    return x + y;
  }
  minus(x, y){
    return x - y;
  }
}

const c = new Calc();
console.log(c.plus(1,2));
console.log(c.plus(10,5));
