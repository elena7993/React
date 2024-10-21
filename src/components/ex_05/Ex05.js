import styled from "styled-components";

const Wrap = styled.div`
  width: 500px;
  height: 800px;
  background-color: lightgrey;
  border: 1px solid #000;

  div {
    width: 480px;
    height: 400px;
    /* background-color: salmon; */
    border-radius: 20px;
    overflow: hidden;
    margin-left: 10px;
    margin-top: 10px;
  }

  img {
    object-fit: fill;
  }

  p {
    font-size: 18px;
    font-weight: 700;
    margin-top: 15px;
    margin-left: 10px;
  }

  /* div {
    width: 400px;
    height: 5px;
    background-color: gray;
  } */
`;

const Ex05 = () => {
  return (
    <>
      <Wrap>
        <div>
          <img
            src="https://m.simf.kr/web/product/big/202109/ddfcdb99dc21ab5d0688c2a8cd4edbba.jpg"
            alt="img"
          />
        </div>
        <p>
          Beetoveen Piano Concerte No. 1<br />
          in C Major, Op I5:11. Rondo. <br />
          Allegro sehezando
        </p>

        <div></div>
      </Wrap>
    </>
  );
};

export default Ex05;

// ******복습**수정******8
