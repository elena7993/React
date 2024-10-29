import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFingerprint,
  faTreePalm,
} from "@fortawesome/free-solid-svg-icons";
import { faOdysee } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  padding: 80px 20px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  h2 {
    font-size: 50px;
    text-align: center;
    font-weight: 600;
    letter-spacing: -2px;
    margin-bottom: 50px;
  }

  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px;
    box-sizing: border-box;
    &::placeholder {
      margin-left: 5px;
    }
  }

  p {
    font-size: 14px;
    color: crimson;
    margin-top: 3px;
  }
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: cornflowerblue;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  opacity: ${(props) => props.$isActive};
`;

const Ex08 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginSubmit = (data) => {
    // console.log(data);
  };

  //   console.log(errors?.username?.message);
  console.log(isValid);

  // 훅은 무조건 안에 적어야 한다

  return (
    <Container>
      <Form onSubmit={handleSubmit(loginSubmit)}>
        <div>
          {/* <FontAwesomeIcon icon="fa-light fa-tree-palm" /> */}
          {/* <FontAwesomeIcon icon={faOdysee} style={{ fontSize: "72px" }} /> */}
        </div>
        <h2>로그인</h2>

        <input
          className="inputBox"
          {...register("username", {
            required: "아이디는 필수입니다!",
            minLength: {
              value: 2,
              message: "아이디는 두 자리 이상 작성하세요",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <p>{errors?.username?.message}</p>
        <input
          {...register("password", {
            required: "패스워드는 필수입니다!",
            // minLength: {
            //   value: 8,
            //   message: "패스워드는 8자 이상 작성하세요",
            // },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
              message: "영문 숫자 특수기호 조합 8자리 이상 작성하세요",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <p>{errors?.password?.message}</p>

        {/* *옵셔널 체이닝(?.)
    =>객체 속성의 유무에 따라 undefinded로 반환이 아닌
    값이 있으면 값을 반환하고 없으면 빈값으로 반환함
    =>객체에게만 사용가능함 
    =>자바스크립트 문법이다 */}

        <Button $isActive={isValid ? "1" : "0.5"}>로그인</Button>
        <div>
          {/* <FontAwesomeIcon icon={faFingerprint} style={{ fontSize: "52px" }} /> */}
        </div>
      </Form>
    </Container>
  );
};

export default Ex08;

// *register
// => 정보를 제어하고 반환함.

// *정규 표현식(Regex) 공부해보기
