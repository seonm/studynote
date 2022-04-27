import React from 'react';
import GradeItem from '../components/GradeItem';
import TableHead from '../components/TableHead';

const Grade2 = props => {
  return (
    <div>
      <h2>2학년</h2>
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {props.items.map((item, index) => {
            return (
              <GradeItem
                key={index}
                sname={item.이름}
                gender={item.성별}
                kor={item.국어}
                eng={item.영어}
                mat={item.수학}
                sci={item.과학}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Grade2;
