import React from 'react';
import StudentSub from '../component/StudentSub';
import Myschool from './Myschool';

import CommonCss from "../assets/css/com.module.css";


const Student = () => {
  return (
    <div className={`${CommonCss.tableBox} ${CommonCss['CommonCss']}`} >
      <table border="1">
        <thead>
          <tr>
            <th>학생번호</th>
            <th>학생이름</th>
            <th>학년</th>
            <th>주민번호</th>
            <th>생년월일</th>
            <th>연락처</th>
            <th>키</th>
            <th>몸무게</th>
            <th>소속학과번호</th>
            <th>담당교수번호</th>
          </tr>
        </thead>
        <tbody className={CommonCss.student}>
          {Myschool.student.map((v, i) => {
            return (
              <StudentSub
                key={i}
                id={v.id}
                sname={v.name}
                grade={v.grade}
                idnum={v.idnum}
                birthdate={v.birthdate}
                tel={v.tel}
                height={v.height}
                weight={v.weight}
                deptno={v.deptno}
                profno={v.profno}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
