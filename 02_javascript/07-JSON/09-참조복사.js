// 1. 값복사 --> 일반 변수끼리의 복사
// 물리적으로 다르기때문에 a값을 수정해도 b값이 따라 변경되지는 않는다.
let a = 100; // 변수 선언과 할당: 메모리 정의하고 그 안에 값을 기록하는 것
let b = a; // 변수간의 대입 a의 값을 b에 넣는다.
console.log('a=' + a +', b=' + b); //a=100, b=100

// 숫자, 문자열, 논리값 복사시 서로 연관 없음.


// 일반 변수끼리 복사한 경우 원본 변경시 복사본에 영향은 없다.
// 일반 변수 : 숫자, 문자열, 논리값
a++;
console.log('a=' + a +', b=' + b); //a=101, b=100

// 2. 참조복사 = 얕은 복사
// 배열, JSON, 객체 끼리의 복사는 참조처리된다.
// 원본을 수정하면 복사본도 함께 수정된다.(반대의 경우도 마찬가지)
// 메모리 주소값을 저장하는 것으로 복사시 데이터 위치값만 복사하는 것(= 데이터를 참조 하는 것)으로 원본 변경시 복사본 변경됨

// 객체 = 객체참조변수 + 인스턴스
// 객체참조변수 user
// 인스턴스 {...}
const user = {
  name: 'lee'
};

const member = user;
console.log(user); // { name: 'lee' }
console.log(member); // { name: 'lee' }

member.name = 'kim';
console.log(user); // { name: 'kim' }
console.log(member); // { name: 'kim' }

const d1 = [1, 2, 3];
const d2 = d1;
console.log(d1); // [1, 2, 3] 이때 d1은 변수 집합의 첫번째 위치를 저장하고 있는다.
console.log(d2); // [1, 2, 3]

d1[0] += 10;
d1[1] += 10;
d1[2] += 10;
console.log(d1); // [ 11, 12, 13 ]
console.log(d2); // [ 11, 12, 13 ]

// 3. 배열끼리의 값복사 방법 = 깊은 복사 = 데이터 연결없는 복사
// 각각의 원소들을 하나하나 복사한다.


const a1 = [1, 2, 3];
// 원본과 동일한 길이를 갖는 배열 생성
const a2 = new Array(a1.length);
console.log(a2)//[ <3 empty items> ]

// 배열을 온전히 값복사하기 위해서는 원소끼리 개별 복사 해야한다.
for(let i = 0; i < a1.length; i++){
  a2[i] = a1[i]
}

// 배열 객체가 갖는 메서드를 활용한 깊은 복사 방법
const a3 = a1.slice();

console.log(a1); // [ 1, 2, 3 ]
console.log(a2); // [ 1, 2, 3 ]
console.log(a3); // [ 1, 2, 3 ]

a1[0] += 100;

console.log(a1); // [ 101, 2, 3 ]
console.log(a2); // [ 1, 2, 3 ]
console.log(a3); // [ 1, 2, 3 ]


// 4. JSON의 깊은 복사
const addr = {
  city: '서울',
  gu: '서초'
} 

// 깊은 복사를 수행할 빈 JSON객체를 생성
const copy = {}

for(let key in addr){
  // copy.city와 copy.gu와 동일한 처리
  copy[key] = addr[key];
}

console.log(addr); // { city: '서울', gu: '서초' }
console.log(copy); // { city: '서울', gu: '서초' }

addr.gu = '강남';

console.log(addr); // { city: '서울', gu: '강남' }
console.log(copy); // { city: '서울', gu: '서초' }

// JS가 제공하는 기능 활용하기
const copy2 = {};

// addr을 copy2에 깊은 복사 수행하는 JS내장기능
// 복사될 copy2가 비어 있는 JSON일 경우 복사
// copy2가 비어있지 않으면 누적
Object.assign(copy2, addr);
console.log(copy2);

// 포인터 pointer
// UseCase 다이어그램


