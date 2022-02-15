/*
Date
객체를 생성하는 순간의 시스템 시각이나
생성자 파라미터로 전달된 시각을 플랫폼에 종속되지 않는 형태로 나타낸다.
실행 이후 변경되는 시간은 반영되지않는다.
*/

// 요일의 이름을 저장하고 있는 배열 생성
const days = ['일','월','화','수','목','금','토'];

// 객체의 생성
const date1 = new Date();

// 년, 월, 일, 시간, 분, 초 리턴받기
const yy = date1.getFullYear(); // 2022 연도 리턴
let mm = date1.getMonth();// 1(2월) 월 리턴
mm = date1.getMonth()+1;// 2월로 보일 수 있도록 값에 1을 더함
// 월은 0부터 시작되어 0 = 1월, 11 = 12월
const dd = date1.getDate(); // 14 일 리턴
const i = date1.getDay() // 요일 리턴
// 요일은 0 = 일요일, 6 = 토요일
const day = days[i] // 요일 숫자를 배열을 지정하여 글자로 변환

const hh = date1.getHours();
const mi = date1.getMinutes();
const ss = date1.getSeconds();

let result = `${yy}-${mm}-${dd} ${days[i]}요일 ${hh}:${mi}:${ss}`;
console.log(result)

/* 날짜를 의미하는 문자열 반환받기 */
// 날짜 부분만 나타내는, 사람이 읽을 수 있는 문자열 반환
console.log(date1.toDateString())

// Date를 나타내는 문자열을 ISO8610확장형식에 맞춰 반환(국제표준시간)
console.log(date1.toISOString())//2022-02-14T08:38:29.921Z

console.group('toLocal')
  // 형식 문자열을 사용해 Date를 나타내는 문자열을 생성
  // toLocalString - 뒤에 국가를 나타내는 단어를 사용해서 변경 가능
  console.log(date1.toLocaleString());// 2/14/2022, 5:38:29 PM
  console.log(date1.toLocaleString('de-DE')) // 14.2.2022, 17:38:29
  console.log(date1.toLocaleString('ko-KR'))// 2022. 2. 14. 오후 5:38:03

  // Date의 날짜 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환
  console.log(date1.toLocaleDateString()) // 2/14/2022
  console.log(date1.toLocaleDateString('de-DE')) 
  console.log(date1.toLocaleDateString('ko-KR'))

  // Date의 시간 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환
  console.log(date1.toLocaleTimeString()) // 5:41:29 PM
  console.log(date1.toLocaleTimeString('de-DE')) // 17:41:29
  console.log(date1.toLocaleTimeString('ko-KR')) // 오후 5:41:50
console.groupEnd()

// 특정 날짜를 의미하는 객체 생성
// 시각이 없으므로 자정으로 설정
let date2 = new Date(2021, 9, 5);
console.log(date2.toLocaleString('ko-KR'))//2021. 10. 5. 오전 12:00:00

// 특정 시점을 의미하는 객체 생성
// 시각까지 지정해서 생성된다.
let date3 = new Date(2021, 9, 5, 21, 19, 31);
console.log(date3.toLocaleString('ko-KR'))//2021. 10. 5. 오후 9:19:31

// 이미 생성된 날자 객체의 성분 변경 set
date3.setYear(2010);
date3.setMonth(1); // 0부터 시작이므로 1은 2월을 의미
date3.setDate(14);
date3.setHours(12);
date3.setMinutes(16);
date3.setSeconds(30);
console.log(date3.toLocaleString('ko-KR')) //2010. 2. 14. 오후 12:16:30