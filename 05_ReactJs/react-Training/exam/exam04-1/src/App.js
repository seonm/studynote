import { Routes, Route, NavLink } from 'react-router-dom';
import GradeData from './GradeData';
import Home from './pages/Home';
import Grade1 from './pages/Grade1';
import Grade2 from './pages/Grade2';
import Grade3 from './pages/Grade3';
import Grade4 from './pages/Grade4';
import comm from './assets/scss/comm.module.scss';

import Meta from './components/Meta'

function App() {
  const dataKeys = Object.keys(GradeData);
  
  return (
    <div>
      <Meta />
      <h1>성적표</h1>
      <nav className={comm.nav}>
        {dataKeys.map((item, index) => {
          return (
            <NavLink className={comm.navLink} key={index} to={`/grade_table/Grade${index + 1}`}>
              {' '}
              {item}
            </NavLink>
          );
        })}
      </nav>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/grade_table/Grade1" element={<Grade1 items={GradeData[dataKeys[0]]}/>} />
        <Route path="/grade_table/Grade2" element={<Grade2 items={GradeData[dataKeys[1]]}/>} />
        <Route path="/grade_table/Grade3" element={<Grade3 items={GradeData[dataKeys[2]]}/>} />
        <Route path="/grade_table/Grade4" element={<Grade4 items={GradeData[dataKeys[3]]}/>} />
      </Routes>
    </div>
  );
}

export default App;
