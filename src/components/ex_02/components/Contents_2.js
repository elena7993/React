const Contents_2 = ({ time, text, subText }) => {
  return (
    <>
      <h3 className="wrap">
        <div className="time">{time}메뉴</div>
        <div className="mian">메인: {text}</div>
        <div className="sub">서브: {subText}</div>
      </h3>
    </>
  );
};

export default Contents_2;
