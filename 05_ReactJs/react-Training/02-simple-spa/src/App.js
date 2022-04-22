import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./pages/Main";

import DepartmentGet from "./pages/DepartmentGet";
import DepartmentPath from "./pages/DepartmentPath";


const App = () => {
  return (
    <div>
      <h1>02-simple-spa</h1>
      <hr />
      {/* 링크 구성 부분 
      Link 태그 :네트워크는 동일하고 페이지내 내용만 변경됨
      a 태그 : 동일한 페이지더라도 새로 refresh됨
      */}
      <nav>
        <Link to="/">[Home]</Link>
        <Link to="/about">[About]</Link>
        <Link to="/main">[Main(SubRoute)]</Link>

        {/* HTTP GET 파라미터를 포함하는 링크 구성 */}
        <Link to="/department_get?id=101&msg=hello">[컴퓨터공학과]</Link>
        <Link to="/department_get?id=102&msg=world">[멀티미디어학과]</Link>

        {/* Path 파라미터를 포함하는 링크 구성 */}
        <Link to="/department_path/201/hello">[전자공학과]</Link>
        <Link to="/department_path/202/world">[기계공학과]</Link>
      </nav>
      
      <a href="/about">일반링크</a>

      {/* 페이지 역할을 할 컴포넌트를 명시하기 */}
      <Routes>
        {/*
          첫페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야한다.
          첫페이지로 사용되는 컴포넌트는 path에 "/"를 권장
        */}
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />}/>

        {/* 서브라우팅 사용 */}
        <Route path="/main/*" element={<Main />} />
        {/* GET 파라미터 사용 */}
        <Route path="/department_get" element={<DepartmentGet />} />
        {/* PATH 파라미터는 URL 형식에 변수의 위치와 이름을 정해줘야한다.
        url에서 `:` 는 변수로 인식된다.  */}
        <Route path="/department_PATH/:id/:msg" element={<DepartmentPath />} />
      </Routes>
    </div>
  );
}

export default App;
