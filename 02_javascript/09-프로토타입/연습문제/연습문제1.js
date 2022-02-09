function Student(name, kor, eng, math){
  this._name = name;
  this._kor = kor;
  this._eng = eng;
  this._math = math;
}

Student.prototype = {
  get name(){
    return this._name;
  },
  set name(namePara){
    this._name = namePara;
  },
  get kor(){
    return this._kor;
  },
  set kor(korPara){
    this._kor = korPara;
  },
  get eng(){
    return this._eng;
  },
  set eng(engPara){
    this._eng = engPara;
  },
  get math(){
    return this._math;
  },
  set math(mathPara){
    this._math = mathPara;
  },
  sum: function(){
    let sum = this.kor + this.eng + this.math;
    return sum
  },
  avg: function(){
   let avg = (this.kor + this.eng + this.math) / 3;
   return avg
  }
}
const member1 = new Student('철수', 92, 81, 77);
const member2 = new Student('영희', 72, 95, 98);
const member3 = new Student('민혁', 80, 86, 84);

console.log(`${member1.name}의 총점은 ${member1.sum()}이고 평균은 ${member1.avg()}이다.`);
console.log(`${member2.name}의 총점은 ${member2.sum()}이고 평균은 ${member2.avg()}이다.`);
console.log(`${member3.name}의 총점은 ${member3.sum()}이고 평균은 ${member3.avg()}이다.`);