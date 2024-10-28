import {
  faBackward,
  faEllipsis,
  faForward,
  faPause,
  faVolumeHigh,
  faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const CoverImg = styled.div`
  height: 450px;
  background: lightblue
    url(https://charts-static.billboard.com/img/2024/08/lady-gaga-b8x-diewithasmile-gdz-344x344.jpg)
    no-repeat center / cover;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const TitleWrap = styled.div`
margin: 10px 0 20px 0;
display: flex;
justify-content: space-between;
align-items: center;
  h4{
    font-size: 18px;
    font-weight: 700;
  }

  p{
    margin-top: 5px;
  }

`;

const More = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: tomato;
`;

const PlayWrap = styled.div`
  .playBar {
    height: 10px;
    background-color: #f1f1f1;
    border-radius: 10px;
    overflow: hidden;
    .innerBar {
      height: 100%;
      width: 65%;
      background-color: tomato;
    }
  }

  .timeWrap {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #dbdbdb;
    margin-top: 10px;
  }
`;
const PlayBtn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0 30px 0;
  font-size: 50px;
  .icons:nth-child(1),
  .icons:nth-child(3) {
    font-size: 30px;
  }
`;
const Volume = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: lightgrey;
  .progress {
    width: 80%;
    height: 7px;
    background-color: #f1f1f1;
    border-radius: 10px;
    .bar {
      width: 50%;
      height: 100%;
      background-color: lightgrey;
    }
  }
`;

const MusicApp01 = () => {
  return (
<Wrap>

  <CoverImg></CoverImg>

  <TitleWrap>
    <div className="text">
      <h4>Dide With A Smile</h4>
      <p>Lady Gaga $ Bruno Mars</p>
    </div>
    <More>
      <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
    </More>
  </TitleWrap>

  <PlayWrap>
    <div className="playBar">
      <div className="innerBar"></div>
    </div>

    <div className="timeWrap">
      <div>2:11</div>
      <div>3:24</div>
    </div>
  </PlayWrap>

  <PlayBtn>
      <div className="icons">
        <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>
      </div>
  </PlayBtn>
  
  <Volume>
  <FontAwesomeIcon icon={faVolumeOff}></FontAwesomeIcon>
      <div className="progress">
        <div className="bar"></div>
      </div>
      <FontAwesomeIcon icon={faVolumeHigh}></FontAwesomeIcon>
  </Volume>

</Wrap>
  );
};

export default MusicApp01;


// *****컴포넌트로 만들기*****