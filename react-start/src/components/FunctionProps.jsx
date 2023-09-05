
// function FunctionProps({name, krPrice, number}){
//   // 1. props 객체로 받아서, props.key로 접근해서 사용하는 방법

// import { children } from "react";

//   props = {
//     name:'',
//     krPrice:number,
//     number:number
//   };

//   // 2. props 객체로 받고 구조분해할당
//   const {name, krPrice, number} = props
//   // let name = props.name;

//   return(
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {number}개에 {krPrice}원 (${krPrice / 1000})
//         </p>
//       <hr />
//     </div>
//   )
// }

// // 3. props 매개변수로 받는 것이 아닌 바로 받는 방법
//   return(
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {number}개에 {krPrice}원 (${krPrice / 1000})
//         </p>
//       <hr />
//     </div>
//   )
// }
// export default FunctionProps;

// 4. children과 defaultProps 사용
function FunctionProps(props){
  const {name, number, krPrice} = props;
  return(
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {krPrice}원 (${krPrice / 1000})
      </p>
      <hr />
    </div>
  )
}

FunctionProps.defaultProps = {
  name: 'fruit',
  krPrice: 10000,
  number: 5
}
export default FunctionProps;