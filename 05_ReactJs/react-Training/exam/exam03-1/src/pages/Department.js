import React from 'react';
import DepartmentSub from '../component/DepartmentSub';
import Myschool from './Myschool';

import dep from "../assets/css/dep.module.css";

const Department = () => {
  const { department } = Myschool;
  return (
    
    <table>
      <tbody>
        <tr className={dep.depHead}>
          <th>학과번호</th>
          <th>학과이름</th>
          <th>위치</th>
        </tr>
        {department.map((v, i) => {
          console.log(v);
          return (
            <tr className={dep.depBody}>
              <DepartmentSub key={i} id={v.id} name={v.dname} loc={v.loc} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Department;
