// # 정선미 프로토타입 연습문제
// > 2022-02-09

// ## 문제1. 

// 국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.

// 이 때 Stuent 클래스는 합계를 리턴하는 메서드인 `sum()`과 평균을 리턴하는 `avg()`를 제공합니다.

// 작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.

// 클래스는 JSON 형식으로 작성되어야 합니다.

// | 이름 | 국어 | 영어 | 수학 |
// |---|---|---|---|
// | 철수 | 92 | 81 | 77 |
// | 영희 | 72 | 95 | 98 |
// | 민혁 | 80 | 86 | 84 |


// #### 출력결과

// ```
// 철수의 총점은 249점 이고 평균은 83점 입니다.
// 영희의 총점은 251점 이고 평균은 83.66666666666667점 입니다.
// 민혁의 총점은 264점 이고 평균은 88점 입니다.
// ```


// ## 문제2.

// 가로(`width`), 세로(`height`)정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.

// 이 클래스는 생성자의 파라미터가 없으며 둘레의 길이를 구해 리턴하는 getAround() 메서드와 넓이를 구해 리턴하는 gerArea() 메서드를 제공합니다.

// 클래스는 JSON 형식으로 작성되어야 합니다.


// #### 출력결과

// 가로가 10이고 세로가 5인 경우

// ```
// 둘레의 길이는 30이고 넓이는 50입니다.
// ```

// ## 문제2
// 다음을 만족하는 Student 클래스를 작성하시오.

// 1. String형의 학과와 정수형의 학번을 프로퍼티로로 선언후 생성자를 통해 주입
// 2. getter, setter를 정의
// 3. sayHello() 메서드를 통해 "나는 OOOO학과 OO학번 입니다." 를 출력하는 기능을 구현

// ## 문제3.
// 다음을 만족하는 클래스 Account를 작성하시오.(틀린문제)

// 1. 다음의 2 개의 필드를 선언
//     - 문자열 owner; (이름)
//     - 숫자형 balance; (금액)
// 1. 위 모든 필드에 대한 getter와 setter의 구현
// 1. 위 모든 필드를 사용하는 가능한 모든 생성자의 구현
// 1. 메소드 deposit()의 헤드는 다음과 같으며 인자인 금액을 저축하는 메소드
//     - deposit(amount)
// 1. 메소드 withdraw()의 헤드는 다음과 같으며 인자인 금액을 인출(리턴)하는 메소드
//     - withdraw(long amount)
//     - 인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력

class Account {
  constructor(owner, balance){
    this._owner = owner;
    this._balance = balance;
  }
  set owner(value){
    this._owner = value
  }
  get owner(){
    return this._owner
  }
  set balance(value){
    this._balance = value
  }
  get balance(){
    return this._balance
  }
  deposit(amount){
    return this.balance += amount
  }
  withdraw(longAmount){
    if(longAmount > this.balance){
      console.log('잔액부족');
      return
    }
    this.balance -= longAmount
    return this.balance
  }
}

const account = new Account('계좌주',0);

account.deposit(30000);
console.log(account)
account.withdraw(10000);
console.log(account)
account.withdraw(100000);

