import React from 'react';
import Myschool from "./Myschool";
console.log(Myschool.department)

const Department = () => {
  const {department} = Myschool;
  return(
    <div>
      <table border="1">
        <tbody>
          <tr>
            <th>학과번호</th>
            <th>학과이름</th>
            <th>위치</th>
          </tr>
          {
            department.map((v,i) => {
              return (
                // 선생님꺼 나중에 어떻게 처리했는지 풀이보기 id값도 유일하니까
                <tr key={i}>
                  <td>{v.id}</td>
                  <td>{v.dname}</td>
                  <td>{v.loc}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Department;