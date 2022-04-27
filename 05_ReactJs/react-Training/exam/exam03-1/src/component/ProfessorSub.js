import React from 'react';

const ProfessorSub = ({ id, pname, userid, position, sal, hiredate, comm, deptno }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{pname}</td>
      <td>{userid}</td>
      <td>{position}</td>
      <td>{sal}</td>
      <td>{hiredate.substring(0, 10)}</td>
      <td>{comm}</td>
      <td>{deptno}</td>
    </tr>
  );
};

export default ProfessorSub;
