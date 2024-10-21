import styled from "styled-components";

const Wrap = styled.div`
  width: 330px;
  height: 600px;
  border: 3px solid #000;
  border-radius: 10px;
  margin: 0 auto;
`;

const MusicImg = styled.div`
width: 300px;
height: 300px;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  margin: 15px;
}
`;

const MusicInfo = styled.div`
margin-top: 30px;
margin-left: 15px;
.title {
  font-size: 20px;
  font-weight: 700;
}

.desc {
  font-size: 18px;
  color: salmon;
  margin-top: 5px;
}
`;

const PlayBar = styled.div`
width: 300px;
height: 5px;
background-color: gray;
margin-left: 15px;
margin-top: 20px;

`;

const BtnWrap = styled.div`
display: flex;
justify-content: space-around;
margin-top: 30px;

i{
  font-size: 24px;
  cursor: pointer;
}
`;

const Volume = styled.div`
width: 150px;
height: 5px;
background-color: gray;
margin-top: 50px;
margin-left: 15px;
`;




const Ex05 = () => {
  return (
    <>
      <Wrap>

        <MusicImg>
          <img
            src="https://i1.sndcdn.com/artworks-Eke4dWZTIrXCkXPW-hX2ihg-t500x500.jpg"
            alt="img"
          />
        </MusicImg>

        <MusicInfo>
          <p className="title">Blilngding Lights</p>
          <p className="desc">The Weeknd</p>
        </MusicInfo>

        <PlayBar>
          <div></div>
        </PlayBar>

        <BtnWrap>
        <i class="fa-solid fa-backward"></i>
        <i class="fa-solid fa-pause"></i>
        <i class="fa-solid fa-forward"></i>
        </BtnWrap>

        <Volume></Volume>
      
      </Wrap>
    </>
  );
};

export default Ex05;

// ******복습**수정******8
