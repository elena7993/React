import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  max-width: 450px;
  height: 600px;
  background-color: lightgrey;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    all: unset;
    width: 300px;
    height: 40px;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 30px;
    /* display: flex; */
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
      </form>
    </Wrap>
  );
};

export default Ex08;
