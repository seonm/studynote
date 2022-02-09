class Student{
  constructor(kor, eng, math){
    this._kor = kor;
    this._eng = eng;
    this._math = math;
  }
  sum(){
    return this._kor + this._eng + this._math;
  }
  avg(){
    return this.sum() / 3;
  }
}



const grade = [
  ['철수', 92, 81, 77],
  ['영희', 72, 95, 98],
  ['민혁', 80, 86, 84]
];
for(const line of grade){
  const gradePerson = new Student(line[1],line[2],line[3]);
  console.log(`${line[0]}의 총점은 ${gradePerson.sum()}점 이고, 평균은 ${gradePerson.avg()}점 입니다.`)
}
