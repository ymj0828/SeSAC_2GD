import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <>
      <Link to={"/"}>홈으로</Link>
      <Link to={"/lecture"}>수업코드</Link>
      <Link to={"/practice"}>연습하기</Link>
    </>
  );
}
