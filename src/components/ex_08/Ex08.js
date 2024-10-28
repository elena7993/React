import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFingerprint,
  faTreePalm,
} from "@fortawesome/free-solid-svg-icons";
import { faOdysee } from "@fortawesome/free-brands-svg-icons";

const Wrap = styled.div`
  width: 100%;
  max-width: 350px;
  height: 600px;
  background: rgb(51, 216, 218);
  background: linear-gradient(
    308deg,
    rgba(51, 216, 218, 1) 0%,
    rgba(253, 247, 45, 1) 100%
  );
  border: 2px solid #000;
  margin: 0 auto;
  border-radius: 15px;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 20px;
    h2 {
      width: 80px;
      height: 30px;
      /* border: 1px solid black; */
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      margin: 10px 0;
    }
    input {
      all: unset;
      width: 300px;
      height: 40px;
      background-color: #fff;
      border: 1px solid rgba(51, 216, 218, 1);
      border-radius: 30px;
      text-align: left;
      margin: 20px 0;
    }

    button {
      all: unset;
      width: 200px;
      height: 36px;
      background-color: rgba(253, 247, 45, 0.9);
      border-radius: 30px;
      text-align: center;
      line-height: 30px;
      margin: 20px 0 90px 0;
    }
  }
`;

const Ex08 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginSubmit = (data) => {
    // console.log(data);
  };

  //   console.log(errors?.username?.message);

  // 훅은 무조건 안에 적어야 한다

  return (
    <Wrap>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <div>
          {/* <FontAwesomeIcon icon="fa-light fa-tree-palm" /> */}
          <FontAwesomeIcon icon={faOdysee} style={{ fontSize: "72px" }} />
        </div>
        <h2>로그인</h2>

        <input
          className="inputBox"
          {...register("username", {
            required: "아이디는 필수입니다!",
          })}
          type="text"
          placeholder="아이디"
        />
        <p>{errors?.password?.message}</p>
        <input
          {...register("password", {
            required: "패스워드는 필수입니다!",
          })}
          type="password"
          placeholder="패스워드"
        />
        <p>{errors?.username?.message}</p>

        {/* *옵셔널 체이닝(?.)
    =>객체 속성의 유무에 따라 undefinded로 반환이 아닌
    값이 있으면 값을 반환하고 없으면 빈값으로 반환함
    =>객체에게만 사용가능함 
    =>자바스크립트 문법이다 */}

        <button>로그인</button>
        <div>
          <FontAwesomeIcon icon={faFingerprint} style={{ fontSize: "52px" }} />
        </div>
      </form>
    </Wrap>
  );
};

export default Ex08;
