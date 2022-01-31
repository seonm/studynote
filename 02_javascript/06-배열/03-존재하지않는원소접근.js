//100이라는 하나의 원소를 갖는 한 칸으로 구성된 배열
let myArr = [100];
console.log(myArr);//[100]

//0번째 원소를 변수에 할당하고 출력
let item1 = myArr[0]; // >success
console.log(item1);//100

//1번째 원소를 변수에 할당하고 출력 >fail
//myArr은 1개의 원소를 갖기 때문에 인덱스 번호는 0만 존재한다.
let item2 = myArr[1];
console.log(item2)//undefined

if(item2 !== undefined){
  console.log('1번째 원소 존재')
}else{
  console.log('1번째 원소 없음')
}

//비구조 문법으로 값 복사하기
let [a, b] = myArr;
console.log(a);//100
console.log(b);//undefined

