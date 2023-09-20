import { PropsType1, PropsType2, PropsType3 } from "../components/PropsType";
import Count from "../components/Count";
import SetText from "../components/SetText";
import EvnetObj from "../components/EventObj";
import HeaderMenu from "../components/HeaderMenu";

export default function Lecture() {
  return (

    <>
    <HeaderMenu></HeaderMenu>
      <h1>lecture page</h1>
      <PropsType1 name="allie"></PropsType1>
      <PropsType2
        width="100px"
        height="100px"
        color="green"
        borderColor="black"
      ></PropsType2>
      <PropsType3 width={200} height={200} text="안녕하세요"></PropsType3>
      <Count></Count>
      <SetText></SetText>
      <EvnetObj></EvnetObj>
    </>
  );
}
