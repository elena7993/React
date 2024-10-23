import { useState } from "react";
import ClickEx from "./components/ClickEx";
import Event from "./components/Event";

const Ex06 = () => {
  return (
    <div>
      {/* <ClickEx /> */}
      <Event />
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
