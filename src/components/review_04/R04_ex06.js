import { useState } from "react";


const R04_ex06 = () => {

  const [num, setNum] = useState(0);

  const onPlus = () => {
    setNum(num + 1);
  };

  const onMinus = () => {
    setNum(num - 1);
  };


  return(
    <div>
      <h3>클릭하면 숫자가 증가/감소합니다!</h3>
      <p>{num}</p>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
};

export default R04_ex06;