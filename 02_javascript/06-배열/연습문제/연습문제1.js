// Q1 
// true를 false로, false를 true로 저장하기
// boolean값을 반전하기 위해서는 NOT연산자 '!'를 사용해야한다.
// ex. !true == false, !false == true


var check_list = [true, false, false, true, false];
console.log('before -->' + check_list);

for(let i = 0; i<check_list.length; i++){
  check_list[i] = !check_list[i]
}


console.log('after -->' + check_list);