import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';

import MyProps from './pages/MyProps'
import MyPropTypes from './pages/MyPropTypes'
import MyChildren from './pages/MyChildren'

import Meta from './components/Meta'

const App = () => {
  return (
    <div>
      {/* route처리를 수행하는 페이지에서 이 컴포넌트 사용시 이 내용이 모든 페이지에 공통 적용된다. */}
      <Meta />

      <h1>04-props</h1>
      <nav>
        <Link to='/myprops'>[MyProps]</Link>
        <Link to='/mypropstypes'>[MyPropTypes]</Link>
        <Link to='/mychildren'>[MyChildren]</Link>
      </nav>
      <hr />
      <Routes>
        <Route path='/myprops' element={<MyProps />} />
        <Route path='/mypropstypes' element={<MyPropTypes />} />
        <Route path='/mychildren' element={<MyChildren />} />
      </Routes>
    </div>
  );
}

export default App;
