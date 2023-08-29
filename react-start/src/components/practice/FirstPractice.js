function FirstPractice(){
  const helloStr = 'Hello, first exercise';
  return(
    <div style={{marginTop:'32px', backgroundColor:'skyblue'}} onClick={()=>alert('클릭 됨')}>
      {helloStr}
    </div>
    // <div onClick={alert('클릭 됨')} style={{marginTop:'32px', backgroundColor:'skyblue'}}>
    //   <helloStr></helloStr>
    // </div>
  );

  
}
export default FirstPractice