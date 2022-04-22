import React from 'react';
/*
  jsx 반복 처리(3) - return문 안에서 map함수 사용하기
*/

const Loop3 = () => {
  const seasons = ['봄', '여름', '가을','겨울']; 

  return(
    <div>
      <h2>Loop2</h2>
      <table>
        <tbody>
          <tr>
            {seasons.map((item, index) => {
              return <td key={index}>{item}</td>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Loop3;