import React from 'react';
import PropTypes from 'prop-types';
import GradeData from '../GradeData';

const GradeItem = ({이름, 학년, 성별 , 국어, 영어, 수학, 과학}) => {
  return(
    <table border='1' style={{textAlign:"center"}}>
      <thead>
        <tr>
          <th>이름</th>
          <th>학년</th>
          <th>성별</th>
          <th>국어</th>
          <th>영어</th>
          <th>수학</th>
          <th>과학</th>
          <th>총점</th>
          <th>평균</th>
        </tr>
      </thead>
      <tbody>
        {
          GradeData.map((v,i)=>{
            const kor = v.국어 === '미응시' ? 0 : v.국어;
            const eng = v.영어 === '미응시' ? 0 : v.영어;
            const mat = v.수학 === '미응시' ? 0 : v.수학;
            const sci = v.과학 === '미응시' ? 0 : v.과학;
            let sum = parseInt(kor+eng+mat+sci, 10);
            let avg = parseInt((kor+eng+mat+sci) / 4, 10) ;

            return(
              <tr key={i}>
                <td>{v.이름}</td>
                <td>{v.학년}</td>
                <td>{v.성별}</td>
                <td>{kor}</td>
                <td>{eng}</td>
                <td>{mat}</td>
                <td>{sci}</td>
                <td style={{fontWeight: "bold"}}>
                  {sum}
                </td>
                <td style={{fontWeight: "bold"}}>
                  {avg}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
  
}

GradeItem.propTypes = {
  이름:PropTypes.string,
  학년:PropTypes.string,
  성별:PropTypes.string,
  국어:PropTypes.number,
  영어:PropTypes.number,
  수학:PropTypes.number,
  과학:PropTypes.number
}



export default GradeItem