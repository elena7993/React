const Contents_3 = ({ foodMenus }) => {
  return (
    <div className="wrap">
      <div className="box">
        <h3>{foodMenus[0].title}메뉴</h3>
        <div>
          <div>메인: {foodMenus[0].mainMenu}</div>
          <div>서브: {foodMenus[0].subMenu}</div>
        </div>
      </div>

      <div className="box">
        <h3>{foodMenus[1].title}메뉴</h3>
        <div>
          <div>메인: {foodMenus[1].mainMenu}</div>
          <div>서브: {foodMenus[1].subMenu}</div>
        </div>
      </div>

      <div className="box">
        <h3>{foodMenus[2].title}메뉴</h3>
        <div>
          <div>메인: {foodMenus[2].mainMenu}</div>
          <div>서브: {foodMenus[2].subMenu}</div>
        </div>
      </div>
    </div>
  );
};

export default Contents_3;
