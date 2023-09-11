import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRef } from "react";
export default function Navigate() {
  const inputRef = useRef();
  const Div = styled.div`
    cursor: pointer;
    padding: 4px;
    box-shadow: 0px 0px 5px #777777aa;
    border-radius: 8px;
    background-color: greenyellow;
  `;

  const navigate = useNavigate();
  const controlProfile=()=>{
    if(inputRef.current.value.length > 5){
      navigate('/profile')
    }else{
      navigate('/')
    }
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "pink",
          justifyContent: "space-evenly",
        }}
      >
        <Div onClick={() => navigate(-1)}>뒤로가기</Div>
        <Div onClick={() => navigate(1)}>앞으로 가기</Div>
        <Div onClick={() => navigate(-2)}>뒤로 두 번가기</Div>
        <Div onClick={() => navigate("/")}>홈으로 가기</Div>
        <Div onClick={() => navigate("/board")}>보드페이지</Div>
        <Div onClick={() => controlProfile()}>프로필 페이지</Div>
      </div>
      <input type="text" ref={inputRef} />
    </>
  );
}
