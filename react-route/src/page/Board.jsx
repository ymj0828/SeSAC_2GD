import { Link } from "react-router-dom";

export const Board = () => {
  return (
    <>
      <h1> 게시판 페이지 입니다.</h1>
      <Link to="/board/1">1번 게시물</Link>
      <Link to="2">2번 게시물</Link>
    </>
  );
};