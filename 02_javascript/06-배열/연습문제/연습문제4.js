// 두개의 배열을 비교할때는 i 값이 똑같은 애들이 항상 연결된다.

// 단가정보
var price = [38000, 20000, 17900, 17900];
// 수량정보
var qty = [6, 4, 3, 5];
// 총 합계 금액
var money = 0;

for(let i = 0; i < qty.length; i++){
  // 단가 * 수량의 합을 구한다.
  money += price[i] * qty[i] 
}
console.log('전체 결제 금액 : ' + money + '원')
//451200원
 
