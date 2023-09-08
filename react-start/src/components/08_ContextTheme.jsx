import { useState } from "react";
import ContextComp from "./08_ContextComp";
import { ThemeContext } from "../contexts/ThemeContext";
import "../styles/context.css";

export default function ContextTheme() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <h4>useContext</h4>
      {isDark ? "다크모드입니다." : "라이트모드입니다."}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <ContextComp></ContextComp>
      </ThemeContext.Provider>
    </>
  );
}
