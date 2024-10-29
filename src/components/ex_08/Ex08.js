import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const Ex08 = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Ex08;

// *쿠키

// *세션
// =>올드방식, 가장 많이 쓰임
// =>(프론트엔트-백엔트-데이터베이스) 구조에서 DB에 로그인기록(유효기간)남김
// =>그 유효기간이 저장되어있다/ 시간이 만료되면 -> 세션이 만료되었습니다
// =>단점은, 유저가 많으면 관리가 어렵다 따라서 서버를 여러개로 나눠서 관리한다(ex:유튜브)
// =>대신 안전함!!

// *토큰
// =>(프론트엔드-백엔드-데이터베이스) 구조에서 백엔드가 DB에 들려 토큰값 저장/
// 토큰을 줌(누구나 토큰을 볼 수 있다. 단 정보는 백엔드만 볼 수 있다)- 일종의 고유번호.
// =>사용자가 페이지를 이동할때마다 DB의 토큰값과 사용자의 토큰값을 같은지 대조함
// =>저장은 유저가 한다
// =>따라서 빠름빠름
// =>단, 보안은 세션보다 약하다.

// *캐시
// =>예를 들어 사이트에 접속하면 요청해서 받아옴
// =>이미지같은 것들을 저장시켜놓는다.
// =>다음에 열게 되었을 때 또 요청하는 것이 아니라 저장된 것을 바로 보여줄 수 있다
