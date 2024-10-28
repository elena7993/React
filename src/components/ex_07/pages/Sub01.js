import { useParams } from "react-router-dom";

const subPageData = [
  {
    id: 0,
    title: "SUB 01",
    desc: "첫번째 서브페이지",
  },
  {
    id: 1,
    title: "SUB 02",
    desc: "두번째 서브페이지",
  },
];

const Sub01 = () => {
  const params = useParams();
  const id = params.id;
  // const id = params.id;

  // =>id값을 알아올 수 있음
  // =>router 경로 중 변수값을 얻어옴
  // =>객체로 반환됨
  // =>객체 비구조화 할당 이용할 수 있음

  // console.log(parmas);

  // const {id} = useParams();
  // => 이렇게 바로 줄이면 제일 효율적임
  // => 이해필요***************

  // const id = parmas.id
  // 2.이렇게 줄일수도 있다

  return (
    <div>
      <h2>{subPageData[id].title}</h2>
      <p>{subPageData[id].desc}</p>

      {/* <h2>{subPageData[parmas.id].title}</h2>
      <p>{subPageData[parmas.id].desc}</p> */}
      {/* =>1.이렇게 할 수 있다 하지만 길다/ 변수로 만들어서 꺼내 올 수 있다 2번, 3번으로 가자 */}
    </div>
  );
};

export default Sub01;
