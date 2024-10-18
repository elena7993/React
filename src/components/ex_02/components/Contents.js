const Contents = ({ text, bgColor }) => {
  // =>매개변수 안에 객체로 속성값을 넣어줄 수 있다
  //   console.log(props);
  //   const text = props.text;
  //   const color = props.bgColor;

  //   const { text, bgColor } = props;
  //   =>비구조화 할당

  return (
    <div className="box" style={{ backgroundColor: bgColor }}>
      {text}
    </div>
  );
};

export default Contents;
