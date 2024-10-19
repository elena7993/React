const a = () => {
  return {
    name: "네이버",
    url: "https://www.naver.com"
  };
};

const Practice01 = () => {
  return (
    <>
      <h2>Hello</h2>
      <div style={{color: "salmon", backgroundColor: "lightblue"}}>
        <a href={a().url}>{a().name}</a> 
      </div>

    </>
  );
};

export default Practice01;

// =>함수 a를 호출하고, 그 결과로 반환된 객체에서 url 값을 가져오는 옴

