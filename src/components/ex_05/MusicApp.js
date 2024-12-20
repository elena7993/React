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
import PlayBtn from "./components/PlayBtn";
import PlayWrap from "./components/PlayWrap";
import TitleWrap from "./components/TitleWrap";
import Volume from "./components/Volume";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  /* =>여백을 주기위헤서 */
`;

const CoverImg = styled.div`
  height: 450px;
  background: #dbdbdb
    url(https://i1.sndcdn.com/artworks-046GqLCXPx4o6LwG-6iu69w-t500x500.jpg)
    no-repeat center / cover;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <CoverImg></CoverImg>

      <TitleWrap />

      <PlayWrap />

      <PlayBtn />

      <Volume />
    </Wrap>
  );
};
