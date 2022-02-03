// case1 '단가-수량'을 한세트로 하는 정보들을 배열로 구성하면 2차배열형태가 된다.
const inven = [
  //가격, 수량
  [500, 291],
  [320, 586],
  [100, 460],
  [120, 558],
  [92, 18],
  [30, 72]
]
let totalPrice = 0;

for(let i = 0; i<inven.length; i++){
  const itemPrice = (inven[i][0] * 0.9) * inven[i][1]
  totalPrice += itemPrice;
}
console.log('아이템 총 판매가격 : ' + totalPrice + 'G');

// case2
const inven2 = [
  [500, 320, 100, 120, 92, 30],
  [291, 586, 460, 558, 18, 72]
]

let totalPrice2 = 0;

// 0번째 행과 1번째 행의 길이가 동일함이 보장되므로
// 0번째 행에 대한 길이를 직접 구해서 처리한다.
for (let i=0; i<inven2[0].length; i++){
  totalPrice2 += (inven2[0][i] * 0.9) * inven2[1][i];
}

console.log('아이템 총 판매가격 : ' + totalPrice2 + 'G')