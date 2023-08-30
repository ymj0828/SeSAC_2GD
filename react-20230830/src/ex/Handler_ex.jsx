import {useState} from 'react'

export default function Handler_ex(){

  const [showBye, setShowBye] = useState('Hello World!');

  return(
    <div>
      <div>{showBye}</div>
      <button onClick={()=>{setShowBye('Goodbye World!')}}>버튼</button>
    </div>
  )

}