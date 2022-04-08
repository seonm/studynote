// kakao rest api key
const KAKAO_REST_KEY = '9b3c76b409424925624b69c50222cfa3';

// 페이지 번호
let currentPage = 1;

// 검색어
let queryKeyword = null;

// 마지막페이지인지 검사
let isEnd = false;

/* 검색폼의 submit 이벤트 - 신규검색*/
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

  // 신규검색
  currentPage = 1;
  get_image_search();
})

/* 스크롤 이벤트 - 추가검색*/
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
    get_image_search();
  }

});

// Ajax요청 후 결과를 화면에 HTML로 출력하는 함수
async function get_image_search() {
  // 로딩바 객체
  const loading = document.querySelector('#loading');

  // 로딩바 화면에 표시하기
  loading.classList.add('active');

  // 검색 결과가 표시될 영역
  const list = document.querySelector('#list');

  // 1페이지에 대한 요청일 경우 기존에 표시되고 있던 검색결과가 있다면 삭제한다.
  if (currentPage == 1) {
    Array.from(list.getElementsByTagName('li')).forEach((v, i) => {
      list.removeChild(v);
    })
  }

  // 검색결과를 저장할 빈 변수
  let json = null;
  const selectBox = document.querySelector('#source')
  const selectBoxSelected = selectBox.options[selectBox.selectedIndex].value;

  // 데이터 받아오기
  try {
    json = await axios.get(`https://dapi.kakao.com/v2/search/${selectBoxSelected}`, {
      params: {
        query: queryKeyword,
        page: currentPage
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
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', v.url);
      a.setAttribute('target', '_blank');
      a.classList.add('use-thumbnail')

      const img = document.createElement('img');
      if(v.thumbnail == ''){
        img.setAttribute('src', './img/noimg.jpeg');
      }else{
        img.setAttribute('src', v.thumbnail);
      }
      // 글제목
      const title = document.createElement('h2');
      title.innerHTML = v.title;

      // 본문내용
      const contents = document.createElement('p');
      contents.innerHTML = v.contents;

      // 블로그명
      let name = document.createElement('span'); // 출처
      name.innerHTML = selectBoxSelected == 'blog' ? v.blogname:v.cafename;
      name.classList.add('info', 'first');
      

      // 작성일
      const datetime = document.createElement('span'); // 작성일
      
      // const yy = Number(v.datetime.substring(0,4))
      // const mm = Number(v.datetime.substring(5,7))
      // const dd = Number(v.datetime.substring(8,10))
      // const date = `${yy}. ${mm}. ${dd}`
      // const time = v.datetime.substring(11,13)<12 ? '오전 ' : '오후 ';
      // const timeFull = time + v.datetime.substring(11,19);
      // datetime.innerHTML = `${date} ${timeFull}`;
      // datetime.classList.add('info')

      const date = new Date(v.datetime);
      const span2 = document.createElement('span');
      span2.innerHTML = date.toLocaleString();
      span2.classList.add('info');

      a.appendChild(img);
      a.appendChild(title);
      a.appendChild(contents);
      a.appendChild(span2);
      a.appendChild(datetime);

      li.appendChild(a);
      list.appendChild(li);
    })
  }
}