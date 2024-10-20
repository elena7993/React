import Feed from "./components/Feed";
import Input from "./components/Input";
// import "./style.css";

const user = [
  {
    id: 0,
    avatar: "유우리",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtmyJ0-mgYjzESVQ0w3fxNUR0M-yctsXFdw&s",
    feedImg: "https://i.ytimg.com/vi/zYS-60HG_cs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA1CkRvwyJiPr6hk5WTrPGuEXC_dQ"
  },
  {
    id: 1,
    avatar: "요루시카",
    profileImg: "",
    feedImg: ""
  },
  {
    id: 2,
    avatar: "야마",
    profileImg: "",
    feedImg: ""
  },
];

const Props03 = () => {
  return (
    <div>
      <Feed insta_info={user} />
    </div>
  );
};

export default Props03;