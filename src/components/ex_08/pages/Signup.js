import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  cursor: ${(props) => props.$isPoint};
  opacity: ${(props) => props.$isActive};
`;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const nav = useNavigate();
  // =>페이지 이동할 때 사용함
  // =>넘어온 데이터가 true 일때 페이지가 넘어가는 로직임

  const signupSubmit = (data) => {
    alert(`${data.userid}님 반갑습니다. 회원가입되었습니다`);
    nav("/login");
  };

  console.log(isValid);

  return (
    <Container>
      <Form onSubmit={handleSubmit(signupSubmit)}>
        <h2>회원가입</h2>

        <input
          {...register("username", {
            required: "이름은 필수입력 사항입니다",
          })}
          type="text"
          placeholder="이름"
        />
        <p>{errors?.username?.message}</p>

        <input
          className="inputBox"
          {...register("userid", {
            required: "아이디는 필수입니다!",
            minLength: {
              value: 2,
              message: "아이디는 두 자리 이상 작성하세요",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <p>{errors?.userid?.message}</p>
        <input
          {...register("password", {
            required: "패스워드는 필수입니다!",

            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
              message: "영문 숫자 특수기호 조합 8자리 이상 작성하세요",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <p>{errors?.password?.message}</p>

        <input
          {...register("useremail", {
            required: "이메일은 필수 입력사항입니다",
            // register: false,
            // =>만약 이메일이 필수사항이 아닐경우
          })}
          type="text"
          placeholder="이메일"
        />
        <p>{errors?.useremail?.message}</p>

        <Button
          $isActive={isValid ? "1" : "0.5"}
          $isPoint={isValid ? "pointer" : "default"}
        >
          가입하기
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
