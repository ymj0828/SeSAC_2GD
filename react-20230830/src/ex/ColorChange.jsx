import { useState } from "react";

export default function ColorChange() {
  const [showText, setShowText] = useState("검정색");
  const [showColor, setShowColor] = useState("black");

  return (
    <div>
      <h1 style={{ color: showColor }}>{showText} 글씨</h1>
      <button
        onClick={() => {
          setShowText("빨간색");
          setShowColor("red");
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          setShowText("파란색");
          setShowColor("blue");
        }}
      >
        파란색
      </button>
    </div>
  );
}
