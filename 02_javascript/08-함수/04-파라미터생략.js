// 함수의 파라미터 생략

// 두개의 파라미터를 갖는 함수 정의
function foo(x, y){
  console.log('x=' + x + ', y=' + y);

  // 파라미터가 생략될 수 있으므로 견고한 코드라고 볼 수 없다.
  // let result = x + y

  // 견고한 코드 : undefined가 나올 경우를 미리 계산하여 제외시켜 짠다.
  let result = 0;
  if(x != undefined){ result += x; }
  if(y != undefined){ result += y; }

  console.log('result=' + result);
}
foo(100, 200);//x=100, y=200 result=300
foo(500);//x=500, y=undefined result=500
foo();//x=undefined, y=undefined result=0