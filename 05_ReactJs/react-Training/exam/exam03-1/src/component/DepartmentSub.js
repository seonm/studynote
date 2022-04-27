import React from 'react';

const DepartmentSub = ({id, name, loc}) => {
  return (
    <React.Fragment>
      <td>{id}</td>
      <td>{name}</td>
      <td>{loc}</td>
    </React.Fragment>
  )
}

export default DepartmentSub