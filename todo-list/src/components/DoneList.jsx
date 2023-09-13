import { useSelector } from "react-redux"

export default function DoneList(){
  const list = useSelector((state)=>state.todo.list).filter((el)=>el.done === true)
  return(
    <>
      <h1>DoneList</h1>
      {list.map((el)=>{
        return <li key={el.id}>{el.text}</li>
      })}
    </>
  )
}