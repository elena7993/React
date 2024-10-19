const Card02 = ({cafeMenu}) => {
  return (
    <>
    <div className="wrap">

      <div className="con">
        <h3>{cafeMenu[0].day}</h3>
        <ul>
            <li>FOOD: {cafeMenu[0].food}</li>
            <li>TEA: {cafeMenu[0].tea}</li>
        </ul>
      </div>

      <div className="con">
        <h3>{cafeMenu[1].day}</h3>
        <ul>
            <li>FOOD: {cafeMenu[1].food}</li>
            <li>TEA: {cafeMenu[1].tea}</li>
        </ul>
      </div>

      <div className="con">
        <h3>{cafeMenu[2].day}</h3>
        <ul>
            <li>FOOD: {cafeMenu[2].food}</li>
            <li>TEA: {cafeMenu[2].tea}</li>
        </ul>
      </div>

    </div>

    </>
  );
};

export default Card02;