class Student{
  constructor(){
    this._grade = new Array();
  }
  set score(value){
    this._grade.push(value);
  }
  getSum(){
    let sum = 0;
    if(this._grade.length > 0){
      for(const i of this._grade){
        sum+= i
      }
    };
    return sum
  }
  getAvg(){
    let avg = this.getSum() / this._grade.length;
    return avg
  }
  getSumAvg(){
    return [this.getSum(), this.getAvg()]
  }
  getMinMax(){
    let getMinMax = {
      min : this._grade[0],
      max : this._grade[0]
    }
    for(let i=0;i<this._grade.length;i++){
      getMinMax['max'] = this._grade[i] > getMinMax['max'] ? getMinMax['max'] = this._grade[i] : getMinMax['max'];
      getMinMax['min'] = this._grade[i] < getMinMax['min'] ? getMinMax['min'] = this._grade[i] : getMinMax['min'];
    }
    return getMinMax;
  }
  getVar(){
    //편차(개별값-평균값)를 제곱한 후 다 더해서 전체 자료의 수로 나누어 준 값
    let sumAvg = 0;
    for(const i of this._grade){
      sumAvg += ((i - this.getAvg()) * (i - this.getAvg()))
    }
    return sumAvg / this._grade.length
  }
  getStd(){
    return Math.sqrt(this.getVar())
  }
}

let a = new Student();

console.log(a.score = 82)
console.log(a.score = 76)
console.log(a.score = 91)
console.log(a.score = 98)
console.log(a.score = 64)

console.log(a.getSumAvg())
console.log(a.getMinMax())
console.log(a.getVar())
console.log(a.getStd())