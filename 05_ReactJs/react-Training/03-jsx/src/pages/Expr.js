import React from 'react';

// 기본 표현식 연습

const Expr = () => {
  // 사용자 정의 변수
  const name = '리액트';
  const age = 19;
  const color = '#f00';
  const message = '리액트는 가장 주목받는 프론트앤드 프레임워크다.';

  // 개발자가 직접 정의한 함수
  // msg 길이가 len을 넘어가면 줄임처리
  const myEllipsis = (message, len) => {
    let str = message;
    if(str.length > len){
      str = str.substring(0, len) + '...';
    }
    return str;
  }

  return(
    <div>
      <h2>
        Expr <samll>(jsx 기본 표현식)</samll>
      </h2>
      {/* 기본 변수 출력하기 - 간단한 사칙연산 가능 */}

      <h3>
        {name}님은 {age + 1}세 입니다.
      </h3>
      <p>
        {/* 
          HTML 속성에 변수를 출력할 경우 따옴표를 사용하지 않는다.
          따옴표를 사용시에는 변수가아닌 중괄호를 포함한 그 자체를 문자열로 인식해버린다.
         */}
        <font color="#00f">{name}</font>님은 &nbsp;
        <font color={color}>리액트 개발자</font>입니다.
      </p>

      <blockquote>
        {myEllipsis(message, 15)}
      </blockquote>
    </div>
  )
}

export default Expr;