import { useState } from "react";

const Ex06 = () => {
  //   let num = 0;

  //   const plusHandler = () => {
  //     // console.log("클릭클릭");
  //     num++;
  //   };

  const [num, setNum] = useState(0);
  // [변수, 변수를 변경시킬 목적을 갖고 있음 set+ 변수이름 그대로] = useState(초기값);
  //   문자열을 넣고 싶으면 "내용"

  // =>리액트 상태관리 hook(보통 앞에 use가 붙으면 hook이다. 커스텀 가능!)
  // => 배열 비구조화 할당을 통하여 사용하며 반드시 import 해서 사용
  // =>const [변수명, set변수명] = useState(초기화 값)

  const onPlus = () => {
    setNum(num + 1);
    // =>useState에 정으된 변수값을 변경할 때 사용
    // =>set변수명(변경할 값)
  };

  //   const onMinus = () => setNum(num - 1);

  return (
    <div>
      <h3>클릭할 때 숫자 증가</h3>
      <p>{num}</p>
      <button onClick={onPlus}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
      {/* 코드가 짧다면 이렇게 바로 넣을 수도 있다 */}
    </div>
  );
};

export default Ex06;

// *SPA (Single Page Application)
// =>한페이지에서 바뀌는 내용만 변경하고 나머지는 놔둔다
// 속도가 빠르고 효율적이다
// =>전부다 새로고침할 필요가 없음!

// *리액트 라이프 사이클
// =>웹에 정보가 들어옴(렌더링)-일종의 그림을 그려나가는 과정 (생성)- 업데이트 - 장착
// 즉,  render => reacte DOM 및 update => 컴포넌트 mount => 제거(컴포넌트 unmount)

// *Hooks
// =>
