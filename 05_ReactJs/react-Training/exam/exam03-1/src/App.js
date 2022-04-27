import React from 'react';
import { NavLink, Routes, Route } from "react-router-dom";

import Department from "./pages/Department";
import Professor from "./pages/Professor";
import Student from "./pages/Student";

import CommonCss from "./assets/css/com.module.css";


function App() {
  return (
    <div >
      <h1>Exam03</h1>
      <nav className={CommonCss.navA}>
        <NavLink to="/department">학과목록</NavLink> | 
        <NavLink to="/professor">교수목록</NavLink> | 
        <NavLink to="/student">학생목록</NavLink>
      </nav>
      <hr />
      {/* 각 예제 페이지 Route 적용 */}
      <div className={CommonCss.tableBox}>
        <Routes>
          <Route path="/department" element={<Department />} />
          <Route path="/professor" element={<Professor />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
