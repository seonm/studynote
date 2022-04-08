/*
@Filename : main.js
@Author : Jeong Seon-mi
@Description : 카카오 책 검색 api 연결

  < 파일 구성 >
  - setting key, parameter
  - 검색폼의 submit 이벤트(신규검색)
  - 스크롤 이벤트(추가검색)
  - Ajax요청 후 결과를 화면에 HTML로 출력하는 함수

*/

/* setting key, parameter */
// kakao rest api key
const KAKAO_REST_KEY = '9b3c76b409424925624b69c50222cfa3';

// 페이지 번호
let currentPage = 1;

// 검색어
let queryKeyword = null;

// 마지막페이지인지 검사
let isEnd = false;

// 결과 문서 정렬 방식
let selectSort = 'accuracy';

// 한 페이지에 보여질 문서 수
let selectSize = 10;


/* 검색폼의 submit 이벤트(신규검색) */
document.querySelector('#searchForm').addEventListener('submit', e => {
  e.preventDefault();

  // 입력된 검색어를 가져온다.
  const queryField = document.querySelector('#query');
  queryKeyword = queryField.value.trim();

  // 검색어가 입력되지 않은 경우에 대한 예외처리
  if (!queryKeyword) {
    alert('검색어를 입력하세요.');
    queryField.focus();
    return;
  }

  // 선택된 셀렉트 박스 값을 가져온다.
  const sizeBox = document.querySelector('#size')
  const sizeBoxSelected = Number(sizeBox.options[sizeBox.selectedIndex].value);
  
  // 선택된 셀렉트 박스 값을 가져온다.
  const sortBox = document.querySelector('#sort')
  const sortBoxSelected = sortBox.options[sortBox.selectedIndex].value;
  
  // 신규검색
  currentPage = 1;
  selectSize = sizeBoxSelected;
  selectSort = sortBoxSelected;
  get_book_search();
})

/* 스크롤 이벤트(추가검색) */
window.addEventListener('scroll', e => {
  // 마지막 페이지이거나 이미 로딩바가 화면에 표시되고 있다면 처리 중단
  if (isEnd || document.querySelector('#loading').classList.contains('active')) {
    return ;
  }

  // 스크롤바의 Y좌표
  const scrollTop = window.scrollY;
  // 웹브라우저의 창 높이
  const windowHeight = window.screen.availHeight;
  // HTML 문서의 높이
  const documentHeight = document.body.scrollHeight;

  // 스크롤바의 반동 효과를 고려해서 scrollTop + windowHeight가 실제 화면 크기보다 커 질 수도 있다.
  if (scrollTop + windowHeight >= documentHeight) {
    // 2페이지 이후는 추가 검색
    currentPage++;
    get_book_search();
  }

});

/* Ajax요청 후 결과를 화면에 HTML로 출력하는 함수 */
async function get_book_search() {
  // 로딩바 객체
  const loading = document.querySelector('#loading');

  // 로딩바 화면에 표시하기
  loading.classList.add('active');

  // 검색 결과가 표시될 영역
  const list = document.querySelector('#list');

  // 1페이지에 대한 요청일 경우 기존에 표시되고 있던 검색결과가 있다면 삭제한다.
  if (currentPage == 1) {
    Array.from(list.querySelectorAll('.list-li')).forEach((v, i) => {
      list.removeChild(v);
    })
  }

  // 검색결과를 저장할 빈 변수
  let json = null;

  // 데이터 받아오기
  try {
    json = await axios.get(`https://dapi.kakao.com/v3/search/book`, {
      params: {
        query: queryKeyword,
        page: currentPage,
        sort : selectSort,
        size : selectSize,
      },
      headers: {
        Authorization: `KakaoAK ${KAKAO_REST_KEY}`
      }
    });
    // 응답 결과 확인
    console.log(json)
  } catch (e) {
    console.error(err);
    alert('요청을 처리하는데 실패했습니다.');
    return;
  } finally {
    // 로딩바 닫기
    loading.classList.remove('active');
  }
  if (json != null) {
    const { data } = json;

    // 다음 페이지를 요청할 수 있는지를 판단하기 위한 값.
    isEnd = data.meta.is_end;

    data.documents.map((v, i) => {
      // li-1dep 추가
      const listLi = document.createElement('li');
      listLi.classList.add('list-li')

      // link a 추가
      const a = document.createElement('a');
      a.setAttribute('href', v.url);
      a.setAttribute('target', '_blank');

      // 이미지 추가
      const img = document.createElement('img');
      if(v.thumbnail == ''){
        img.setAttribute('src', './img/noimg.jpeg');
      }else{
        img.setAttribute('src', v.thumbnail);
      }

      // info
      const info = document.createElement('div');
      info.classList.add('info')

      // 도서제목
      const title = document.createElement('h2');
      title.innerHTML = v.title;

      // 도서소개
      const contents = document.createElement('p');
      contents.innerHTML = v.contents;

      // 상세정보
      const detail = document.createElement('ul')
      detail.classList.add('detail')
      const detailLi1 = document.createElement('li') // 저자 authors
      detailLi1.innerHTML = v.authors;
      const detailLi2 = document.createElement('li') // 출판사 publisher
      detailLi2.innerHTML = v.publisher;
      const detailLi3 = document.createElement('li') // 정가 price
      // 판매가가 -1이 아닌 경우에 
      // 정가가 0일 경우 판매가를 정가로 처리
      if(v.sale_price !== -1){
        detailLi3.innerHTML = v.price == 0 ? v.sale_price : v.price;
      }else{
        detailLi3.innerHTML = v.price
      }
      
      const detailLi4 = document.createElement('li') // 판매가 sale_price
      // 판매가 -1 일 경우 정가와 동일하게 처리
      detailLi4.innerHTML = v.sale_price == -1 ? v.price : v.sale_price;
      

      detail.appendChild(detailLi1);
      detail.appendChild(detailLi2);
      detail.appendChild(detailLi3);
      detail.appendChild(detailLi4);

      info.appendChild(title);
      info.appendChild(contents);
      info.appendChild(detail);

      a.appendChild(img);
      a.appendChild(info);

      listLi.appendChild(a);
      list.appendChild(listLi);
    })
  }
}