// (1) 리액트 패키지 참조(모든 js파일의 최 상단에서 필수 명시)
import React from 'react';

// (3-1) 직접 작성한 컴포넌트 참조
import Hello from './MyComponent1';
import World from './MyComponent2';

// (2) App이라는 이름의 함수형 컴포넌트(재사용 가능한 HTML조각단위) 정의
// 프로젝트에서 컴포넌트를 렌더링(화면에 출력)하면 함수에서 반환하고 있는 내용이 브라우저에 나타난다.
// 반환되는 HTML코드는 JSX문법을 사용한다.
// JSX -> XML과 비슷한 React 전용 Javascript 확장 문법.
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      {/* (3-2) Hello와 World라는 이름의 컴포넌트 출력 */}
      <Hello></Hello>
      {/* 태그내 추가할 내용이 없을 경우 열린태그의 '/' 사용으로 끝낼 수 있다.  */}
      <World /> 
    </div>
  );
}

export default App;
