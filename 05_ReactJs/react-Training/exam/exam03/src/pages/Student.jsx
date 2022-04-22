import React from 'react';
import Myschool from "./Myschool";
console.log(Myschool.student)

const Student = () => {
  return(
    <div>
      <table border="1">
        <tbody>
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
          {
            Myschool.student.map((v,i) => {
              return (
                <tr key={i}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.grade}</td>
                  <td>{v.idnum.substring(0,6)}-*******</td>
                  <td>{v.birthdate.substring(0,10)}</td>
                  <td>{v.tel}</td>
                  <td>{v.height}</td>
                  <td>{v.weight}</td>
                  <td>{v.deptno}</td>
                  <td>{v.profno}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Student;