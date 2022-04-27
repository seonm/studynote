import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import InlineCss from './pages/InlineCss';
import CssClass from './pages/CssClass';
import CssModule from './pages/CssModule';
import Scss from './pages/Scss';
import ScssModule from './pages/ScssModule';
import StyledComponent from './pages/StyledComponent';

function App() {
  /* 페이지 타이틀에 적용할 inline CSS 정의
    -> css는 js 속성으로 기술해야한다.
        - 전체 구조는 json객체
        - 단위가 포함된 수치값의 경우 문자열로 표기
        - 한쌍의 속성-값 뒤에는 세미콜론(;)이 아닌 콤마(,) 작성
  */
  const myStyle = {
    fontWeight: 'bold',
    color: '#b82514',
    textDecoration: 'none',
    marginRight: '10px',
  };

  return (
    <div>
      <h1 style={myStyle}>05-stylesheet</h1>
      <nav>
        <NavLink className="normalLink" to="/inline_css">
          InlineCss
        </NavLink>
        <NavLink className="normalLink" to="/css_class">
          CssClass
        </NavLink>
        <NavLink className="normalLink" to="/css_module">
          CssModule
        </NavLink>
        <NavLink className="normalLink" to="/scss">
          Scss
        </NavLink>
        <NavLink className="normalLink" to="/scss_module">
          ScssModule
        </NavLink>
        <NavLink className="normalLink" to="/styled_component">
          StyleComponent
        </NavLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/inline_css" element={<InlineCss />} />
        <Route path="/css_class" element={<CssClass />} />
        <Route path="/css_module" element={<CssModule />} />
        <Route path="/scss" element={<Scss />} />
        <Route path="/scss_module" element={<ScssModule />} />
        <Route path="/styled_component" element={<StyledComponent />} />
      </Routes>
    </div>
  );
}

export default App;
