import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Weather from "./pages/Weather";

function App() {
  return (
    <div className="App">
      <h1>주간날씨</h1>
      {/* 링크 구성 */}
      <nav>
        <Link to="/weather/mon">월</Link> | 
        <Link to="/weather/tue">화</Link> | 
        <Link to="/weather/wed">수</Link> | 
        <Link to="/weather/thu">목</Link> | 
        <Link to="/weather/fri">금</Link> | 
        <Link to="/weather/sat">토</Link> | 
        <Link to="/weather/sun">일</Link> | 
      </nav>
      <hr />
      {/* 각 예제 페이지 Route 적용 */}
      <Routes>
        <Route path="/weather/:day" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
