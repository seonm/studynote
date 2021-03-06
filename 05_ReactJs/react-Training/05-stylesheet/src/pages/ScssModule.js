import React from 'react';

// scss 파일 참조하기 > 참조변수 미사용
import myScssMod from '../assets/scss/style.module.scss';

const ScssModule = () => {
  return (
    <div>
      <h2>Scss</h2>
      <div className={myScssMod.myScss}>
        <div className={`${myScssMod.myScssBox} ${myScssMod.red}`} />
        <div className={`${myScssMod.myScssBox} ${myScssMod.green}`} />
        <div className={`${myScssMod.myScssBox} ${myScssMod.blue}`} />
        <div className={`${myScssMod.myScssBox} ${myScssMod.orange}`} />
        <div className={`${myScssMod.myScssBox} ${myScssMod.yellow}`} />
        <div className={`${myScssMod.myScssBox} ${myScssMod.pink}`} />
      </div>
    </div>
  );
};

export default ScssModule;
