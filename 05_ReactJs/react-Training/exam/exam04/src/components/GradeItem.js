import React from 'react';
import PropTypes from 'prop-types';

const GradeItem = ({name, level, sex , kor, eng, math, sinc}) => {
  let sum = parseInt(kor+eng+math+sinc, 10);
  let avg = parseInt((kor+eng+math+sinc) / 4, 10) ;

  return(
    <tr>
      <td>{name}</td>
      <td>{level}</td>
      <td>{sex}</td>
      <td>{kor}</td>
      <td>{eng}</td>
      <td>{math}</td>
      <td>{sinc}</td>
      <td style={{fontWeight: "bold"}}>
        {sum}
      </td>
      <td style={{fontWeight: "bold"}}>
        {avg}
      </td>
    </tr>
  )
}

GradeItem.propTypes = {
  이름:PropTypes.string.isRequired,
  학년:PropTypes.number.isRequired,
  성별:PropTypes.string.isRequired,
}
GradeItem.defaultProps ={
  kor:0,
  eng:0,
  math:0,
  sinc:0
}


export default GradeItem;