
class Student{
  // 생성자
  constructor(departmentName, departmentNumber){
    // 학과이름
    this._departmentName = departmentName;
    // 학번
    this._departmentNumber = departmentNumber;
  }

  set departmentName(departmentName){
    this._departmentName = departmentName;
  }
  get departmentName() {
    return this._departmentName;
  }
  set departmentNumber(departmentNumber){
    this._departmentNumber = departmentNumber;
  }
  get departmentNumber() {
    return this._departmentNumber
  }

  // class안에서 getter,setter로 파라미터 정의해 주고 이를 사용하고 접근하고 멤버변수에 직접적으로 접근하는 것은 안좋다.
  // 메시지 출력 메서드
  sayHello(){
    console.log( `나는 ${this.departmentName}학과 ${this.departmentNumber}학번 입니다.`)
  }
}
const jeong = new Student('의무행정',20122128);
jeong.sayHello()
