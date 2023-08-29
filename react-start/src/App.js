import FunctionProps from "./components/FunctionProps";
import { ClassProps } from "./components/practice/ClassProps";
import { ClassProps2 } from "./components/practice/ClassProps";
import PracticeProps from "./components/practice/PracticeProps";


function App() {
  return(
    <div>
      <FunctionProps name = '사과' krPrice = {5000} number={10}></FunctionProps>
      <FunctionProps name = '샤인머스켓' krPrice = {35000} number={3}></FunctionProps>
      <FunctionProps name = '복숭아'></FunctionProps>
      <FunctionProps>여기가 children입니다</FunctionProps>
      <PracticeProps></PracticeProps>
      <ClassProps name='뽀로로' nickname='사고뭉치' color='#0186cd'></ClassProps>
      <ClassProps2 name='루피' nickname='공주' color='#ed9095'></ClassProps2>
    </div>
  )
}


export default App;
