const Card = ({text, bgColor}) => {
  return (
    <>
      <div style={{width: "300px", height: "300px", backgroundColor: bgColor}}>{text}</div>
    </>
  );
};

export default Card;