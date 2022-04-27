import React from 'react'

const StudentSub = ({id, sname, grade, idnum, birthdate,tel,height,weight,deptno,profno}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{sname}</td>
      <td>{grade}</td>
      <td>{idnum.substring(0,6)}-*******</td>
      <td>{birthdate.substring(0,10)}</td>
      <td>{tel}</td>
      <td>{height}</td>
      <td>{weight}</td>
      <td>{deptno}</td>
      <td>{profno}</td>
    </tr>
  )
}

export default StudentSub