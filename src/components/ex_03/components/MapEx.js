import { Fragment } from "react";
import { MapEx02 } from "./MapEX02";
import MapEx03 from "./MapEx03";

// const arr = [1, 2, 3, 4, 5];

// arr.filter((num) => console.log(num + "💜"));

// arr.map((num) => console.log(num + "💜"));
// => 불변성을 유지한채로 복사해서 꾸며줄 수 있다.
// => jsx문법안에서는 반드시 중괄호를 감싸서 사용해야 한다
// => 내가 쓰고자하는 태그안에 변수명을 넣어서 사용하면 된다! 쉽다! 간결한다! 많이사용함!

// =>중복되지 않는 키값을 넣어줘야함
// =>현재 예시에서 num안에 숫자는 중복되지 않으므로 그냥 num을 넣어줘도 된다

// => 빈 태그일 때는{/* <Fragment key={num}>{num}</Fragment> */}

export const MapEx = () => {
  return (
    <div>
      {/* {arr.map((num) => (
        <h2 key={num}>{num}</h2>
      ))} */}

      {/* <MapEx02 /> */}

      <MapEx03 />
    </div>
  );
};

// *map()
// =>배열만 사용할 수 있음
// =>기존배열을 복사하여 배열안의 요솔르 새로운 값으로 반환시킴
// =>map을 사용할 땐 반드시 key를 사용해야되며 값은 고유값으로 적용할 것
