import React, { useRef } from 'react';
import ImperativeChild, { refType } from './ImperativeChild';

const UseImperativeHandle = () => {
  //사용할때 정의해둔 ref타입을 가지고온 후 useRef를 선언한다.
  const childDivRef = useRef<refType>(null);
  const handleOrangeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //다음과 같이 자식 컴포넌트의 함수에 접근하는게 가능해진다.
    //부모에서 childComponent의 DOM을 직접 변경하는게 아닌, 자식에서 DOM을 변경하는 방식이므로 좀 더 기능구분을 확실하게 해줄 수 있다.
    childDivRef.current?.setDivStyle("30rem", "30rem", "orange");
  };
  const handlePinkButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    childDivRef.current?.setDivStyle("40rem", "40rem", "pink");
  };
  const handleDefaultButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    childDivRef.current?.setDivStyle("20rem", "20rem", "white");
  };
  const handleUserButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    childDivRef.current?.setUser("새로운 이름", "01033333333");
  };
  return (
    <div>
      <button onClick={handleOrangeButton}>오렌지 스타일</button>
      <button onClick={handlePinkButton}>핑크 스타일</button>
      <button onClick={handleDefaultButton}>기본 스타일</button>
      <button onClick={handleUserButton}>유저 정보 변경</button>
      <ImperativeChild ref={childDivRef}></ImperativeChild>
    </div>
  );
};

export default UseImperativeHandle;