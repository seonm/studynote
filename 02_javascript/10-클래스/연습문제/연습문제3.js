
class Account{
  constructor(owner, balance){
    this._owner = owner;
    this._balance = balance;
  }
  set owner(value){
    this._owner = value;
  }
  get owner(){
    return this._owner;
  }
  set balance(value){
    this._balance = value;
  }
  get balance(){
    return this._balance;
  }
  // 인자인 금액을 저축하는 메소드
  deposit(amount){
    this.balance += amount;
  }
  withdraw(amount){
    // 인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력
    if(this.balance < amount){
      console.log('잔액이 부족합니다.')
      return
    }
    this.balance -= amount;
    return amount;
  }
}

const myaccount = new Account('정선미', 50000);
console.log(`저장된 금액은 ${myaccount.deposit(30000)}, 인출금액은 ${myaccount.withdraw(30000)}`)