import { faOdysee } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  max-width: 350px;
  height: 550px;
  background-color: lightgrey;
  border-radius: 15px;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
  }

  input {
    all: unset;
    width: 250px;
    height: 35px;
    background-color: #fff;
    border-radius: 20px;
    margin: 12px 0;
    &::placeholder {
      padding-left: 5px;
    }
  }

  p {
    font-size: 12px;
    color: crimson;
  }
`;

const Button = styled.button`
  all: unset;
  width: 200px;
  height: 30px;
  background-color: cornflowerblue;
  border-radius: 20px;
  margin-top: 30px;
  text-align: center;
  cursor: pointer;
  opacity: ${(props) => props.$isActive};
`;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const nav = useNavigate();

  const loginSubmit = (data) => {
    nav("/login");
    // console.log(data);
  };
  console.log(isValid);
  return (
    <Wrap>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <div>
          <FontAwesomeIcon
            icon={faOdysee}
            style={{ fontSize: "72px", marginBottom: "50px" }}
          />
        </div>
        <input
          {...register("username", {
            required: false,
          })}
          type="text"
          placeholder="이름"
        />
        <input
          {...register("userid", {
            required: "아이디 입력은 필수입니다",
            minLength: {
              value: 2,
              message: "두자리 이상 작성하세요",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <p className="desc_id">{errors?.userid?.message}</p>
        <input
          {...register("userpw", {
            required: "패스워드 입력은 필수입니다",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
              message: "영문 숫자 특수기호 조합 8자리 이상 작성하세요",
            },
          })}
          type="password"
          placeholder="비밀번호"
        />
        <p className="desc_pw">{errors?.userpw?.message}</p>
        <input
          {...register("useremail", {
            required: false,
          })}
          type="text"
          placeholder="이메일"
        />
        <Button $isActive={isValid ? "1" : "0.1"}>로그인</Button>
      </form>
    </Wrap>
  );
};

export default Signup;
