import React from 'react';

/* /src 폴더 하위의 임의의 경로에 존재하는 이미지 파일 참조
-> 현재 소스파일을 기준으로 하는 상대경로
-> 실생히 react에 의해 다른 경로로 복사된다.
-> 확장자 작성 필수
*/
import sample from '../assets/img/sample.png';

const InlineCss = () => {
  /* (1-1) CSS로 사용될 JSON객체 정의
  css 속성 이름은 바닐라스크립트의 프로퍼티 이름으로 지정해야한다.
  ex. document.querySelector('.class').style.backgroundColor = '#fff'
  */
  const myStyle = {
    backgroundColor: '#f60',
    fontSize: '20px',
    color: '#0f6',
    fontWeight: 'bold',
    padding: '10px 25px',
    marginBottom: '10px',
  };

  return (
    <div>
      <h2>InlineCss</h2>
      <h3>변수로 정의된 css 참조하기</h3>
      {/* (1-2) json객체를 style속성에 적용 */}
      <div style={myStyle}>Hello React Css(1)</div>

      <h3>직접 CSS코딩하기</h3>
      {/* (2) CSS 직접 코딩 */}
      <div
        style={{
          backgroundColor: '#f60',
          fontSize: '20px',
          color: '#0f6',
          fontWeight: 'bold',
          padding: '10px 25px',
          marginBottom: '10px',
        }}
      >
        Hello React Css(2)
      </div>

      <h3>이미지 참조하기</h3>
      {/* (3-2) 이미지 사용시 alt속성을 지정안하면 경고 발생 */}
      <img src={sample} width="240" height="240" alt="sample img" />
      {/* (3-3) public 폴더에 있는 파일은 단순 절대경로로 참조
          -> public 폴더 하위에 임의의 폴더 생성 가능
      */}
      <img src="/logo192.png" width="240" height="240" alt="react logo" />

    </div>
  );
};

export default InlineCss;
