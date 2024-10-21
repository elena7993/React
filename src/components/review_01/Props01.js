import Card01 from "./components/Card01";
import Card02 from "./components/Card02";

const cafe = [
  {
    id: 0,
    day: "월요일",
    food: "도넛",
    tea: "커피"
  },
  {
    id: 1,
    day: "화요일",
    food: "베이글",
    tea: "아이스티"
  },
  {
    id: 2,
    day: "수요일",
    food: "파니니",
    tea: "자몽주스"
  },
]

const Props01 = () => {
  return (
    <>

    {/* <Card01 text="Content_01" bgColor="lightpink"/>
    <Card01 text="Content_01" bgColor="lightpink"/> */}

    <Card02 cafeMenu={cafe} />

    </>
  );
};

export default Props01;