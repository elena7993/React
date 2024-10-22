import { faVolumeHigh, faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SVolume = styled.div`
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

const Volume = () => {
  return (
    <SVolume>
      <FontAwesomeIcon icon={faVolumeOff}></FontAwesomeIcon>
      <div className="progress">
        <div className="bar"></div>
      </div>
      <FontAwesomeIcon icon={faVolumeHigh}></FontAwesomeIcon>
    </SVolume>
  );
};

export default Volume;
