import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$color};
`;

const Event = () => {
  const [bgColor, setBgColor] = useState("tomato");
  const [on, setOn] = useState(true);

  const handleClick = () => {
    // setBgColor("cornflowerblue");
    // #6495ed

    if (on) {
      setOn(false);
      setBgColor("cornflowerblue");
    } else if (!on) {
      setOn(true);
      setBgColor("tomato");
    }
    console.log(on);

    // if (on === true) {
    //   setOn(false);
    //   setBgColor("cornflowerblue");
    // } else if (on === false) {
    //   setOn(true);
    //   setBgColor("tomato");
    // }
    // console.log(on);

    // if (bgColor === "tomato") {
    //   setBgColor("cornflowerblue");
    // } else {
    //   setBgColor("tomato");
    // }
  };

  return (
    <div>
      <Box $color={bgColor} onClick={handleClick}></Box>
    </div>
  );
};

export default Event;
