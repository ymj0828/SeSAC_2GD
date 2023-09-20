interface Props {
  name: string;
}

function PropsType1({ name }: Props) {
  return <h1>hello, {name}</h1>;
}

interface Square1 {
  width: string;
  height: string;
  color: string;
  [key: string]: string;
}
function PropsType2(props: Square1) {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
    border: `3px solid ${props.borderColor}`,
  };
  return <div style={divStyle}></div>;
}

interface Square2 {
  width: number;
  height: number;
  text: string;
  color?: string;
}
const PropsType3 = (props: Square2) => {
  const { width, height, color, text } = props;
  const divStyle: object = {
    width: `${width}px`,
    height: `${height}px`,
    /* 
      color props는 optional : 데이터가 전달될 수도 있고 전달되지 않을 수도 있음
      전달되지 않았을 경우를 삼항연산자로 처리할 수 있다!
    */
    backgroundColor: `${color ? color : "pink"}`,
    textAlign: "center",
    lineHeight: `${height}px`,
  };
  return <div style={divStyle}>{text}</div>;
};

export { PropsType1, PropsType2, PropsType3 };
