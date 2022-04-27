import React from 'react';

// scss 파일 참조하기 > 참조변수 미사용
import '../assets/scss/style.scss';

/* scss를 사용하는 컴포넌트
패키지 설치 필요
npm add node-sass
*/
const Scss = () => {
  return (
    <div>
      <h2>Scss</h2>
      <div className="myScss">
        <div className="myScssBox red" />
        <div className="myScssBox green" />
        <div className="myScssBox blue" />
        <div className="myScssBox orange" />
        <div className="myScssBox yellow" />
        <div className="myScssBox pink" />
      </div>
    </div>
  );
};

export default Scss;