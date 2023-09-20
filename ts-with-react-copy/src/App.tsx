import { PropsType1, PropsType2, PropsType3 } from "./components/PropsType";

function App() {
  return (
    <>
      <PropsType1 name="allie"></PropsType1>
      <PropsType2
        width="100px"
        height="100px"
        color="green"
        borderColor="black"
      ></PropsType2>
      <PropsType3
        width={200}
        height={200}
        text="안녕하세요"
      ></PropsType3>
    </>
  );
}

export default App;
