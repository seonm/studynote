import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

import Department from "./pages/Department";
import Professor from "./pages/Professor";
import Student from "./pages/Student";

function App() {
  return (
    <div >
      <h1>Exam03</h1>
      <nav>
        <Link to="/department">학과목록</Link> | 
        <Link to="/professor">교수목록</Link> | 
        <Link to="/student">학생목록</Link>
      </nav>
      <hr />
      {/* 각 예제 페이지 Route 적용 */}
      <Routes>
        <Route path="/department" element={<Department />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
