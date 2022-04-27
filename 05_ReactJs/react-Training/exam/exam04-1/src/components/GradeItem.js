import React from 'react'
import PropTypes from 'prop-types';

const GradeItem = ({sname, gender, kor, eng, mat, sci}) => {
  let sum = parseInt(kor + eng + mat + sci, 10);
  let avg = parseInt((kor + eng + mat + sci) / 4, 10) ;

  return (
    <tr>
      <td>{sname}</td>
      <td>{gender}</td>
      <td>{kor}</td>
      <td>{eng}</td>
      <td>{mat}</td>
      <td>{sci}</td>
      <td>{sum}</td>
      <td>{avg}</td>
    </tr>
  )
}


GradeItem.propTypes = {
  sname:PropTypes.string,
  gender:PropTypes.string,
  kor:PropTypes.number,
  eng:PropTypes.number,
  mat:PropTypes.number,
  sci:PropTypes.number,
}
GradeItem.defaultProps ={
  kor:0,
  eng:0,
  mat:0,
  sci:0,
}

export default GradeItem