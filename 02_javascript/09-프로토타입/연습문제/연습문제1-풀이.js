function Student(kor, eng, math){
  this._kor = kor;
  this._eng = eng;
  this._math = math;
}
Student.prototype = {
  sum: function(){
    return this._kor + this._eng + this._math;
  },
  avg: function(){
   return this.sum() / 3;
  }
};

console.group('반복문 안에서 객체 활용');

const grade = [
  ['철수', 92, 81, 77],
  ['영희', 72, 95, 98],
  ['민혁', 80, 86, 84]
]
for(const item of grade){
  const s = new Student(item[1],item[2],item[3]);
  console.log(`${item[0]}의 총점은 ${s.sum()}이고 평균은${s.avg()}이다.`)
}
