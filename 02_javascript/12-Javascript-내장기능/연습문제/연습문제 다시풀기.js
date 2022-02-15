/*1.
  const email = 'leekh4232@gmail.com';

  // const atIndex = email.indexOf('@');
  // const emailId = email.substring(0, atIndex);
  // const emailAddress = email.substring(atIndex+1);
  // console.log(emailId)
  // console.log(emailAddress)

  // 1번 다르게 풀기
  const emailArr = email.split('@')
  for(let i of emailArr){
    console.log(i)
  }
*/
/*2
  const ssn = '020517-3******'
  const now_year = new Date();
  const year = now_year.getFullYear();

  const ssnYear = function(){
    if(gen == 3 || gen == 4){
      return Number(ssn.substring(0,2)) + 2000;
    }else{
      return Number(ssn.substring(0,2)) + 1900;
    }
  }
  const ssnMon = Number(ssn.substring(2,4));
  const ssnDay = Number(ssn.substring(4,6));
  const gen = Number(ssn.substring(7,8));
  const ssnGen = () => gen == 1 || gen == 3 ?'남자':'여자';
  const ssnAge = year - ssnYear() + 1;
  //console.log(year, ssnYear())

  console.log(`${ssnYear()}년 ${ssnMon}월 ${ssnDay}일에 태어난 ${ssnAge}세 ${ssnGen()}입니다.`)
*/

/*3
const str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.";
const word = '수업시간';
let cut = str.split(word);
console.log(cut.length - 1);
*/

/*4
function Random(n1,n2){
  return parseInt(Math.random() * (n2 - n1 + 1)) + n1 
}
let lotto = [];
for(let i = 0; i < 6; i++){
  let x = Random(1,45);
  let j = 0;
  while(j <= i){
    if(!lotto.includes(x)){
      lotto.push(x);
    }
    j++
  }
}
console.log(lotto)
 */

/* 5*/
function Random(n1,n2){
  return parseInt(Math.random() * (n2-n1+1))+n1;
}

let balls = new Array(45);
for(let i=0;i<balls.length;i++){
  balls[i] = i + 1
};
//console.log(balls)
let lotto = new Array(6);
for(let i=0;i<lotto.length;i++){
  let x = Random(0,balls.length-1);
  if(!lotto.includes(x)){
    lotto[i] = balls[x];
  }else{
    i =- 1
  }
  balls.splice(x,1)
}
console.log(lotto)
console.log(balls)

 
/*6
function solution(participant, completion) {
  var answer = '';

  for(let i of participant){
    if(!completion.includes(i)){
      answer += i
    }
  }
  return answer;
}

*/
