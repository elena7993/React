import Contents_2 from "./components/Contents_2";
import Contents_3 from "./components/Contents_3";
// import "./style.css";

const menus = [
  {
    id: 0,
    title: "아침",
    mainMenu: "시리얼",
    subMenu: "커피",
  },
  {
    id: 1,
    title: "점심",
    mainMenu: "돈까스",
    subMenu: "요거트",
  },
  {
    id: 2,
    title: "저녁",
    mainMenu: "마라탕",
    subMenu: "레몬에이드",
  },
];

const PropsEx = () => {
  return (
    <>
      {/* <Contents text="컨텐츠 1" bgColor="salmon" />
      <Contents text="컨텐츠 2" bgColor="lightblue" /> */}

      {/* <Contents_2 time="아침" text="시리얼" subText="커피" />
      <Contents_2 time="점심" text="샌드위치" subText="몬스터" />
      <Contents_2 time="저녁" text="순두부찌개" subText="고등어구이" /> */}

      <Contents_3 foodMenus={menus} />
    </>
  );
};

export default PropsEx;
