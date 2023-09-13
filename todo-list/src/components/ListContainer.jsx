import DoneList from "./DoneList";
import TodoList from "./TodoList";

export default function ListContainer(){
  return(
    <>
      <TodoList></TodoList>
      <DoneList></DoneList>
    </>
  )
}