// 함수로 불러오기

import { useState } from "react";

function HandlerExClass() {
  const [state, setState] = useState('Hello World')
  return(
    <>
      {state}
      <br />
      <button onClick={()=>setState({state:'Goodbye World'})}>버튼</button>
    </>
  )
}



// 클래스로 불러오기

// import { Component } from "react";

// class HandlerExClass extends Component {
//   state = {
//     text: 'Hello world',
//   };
//   render(){
//     return (
//       <>
//         {this.state.text}
//         <br />
//         <button onClick={()=>this.setState({text:'Goodbye World'})}>버튼</button>
//       </>
//     )
//   }
// }

export default HandlerExClass;