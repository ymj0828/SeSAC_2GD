import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list);
  // list = [{done:false}, {done:true}, {done:true}]
  const todoList = list.filter((el) => el.done === false);
  const input = useRef();
  const dispatch = useDispatch();
  const nextId = useSelector((state)=>state.todo.nextID)
  return (
    <>
      <h1>TodoList</h1>
      <div>
        <input type="text" ref={input} />
        <button
          onClick={() => {
            dispatch(
              create({ id: nextId, text: input.current.value })
            );
            input.current.value = "";
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {todoList.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button onClick={() => dispatch(done(el.id))}>완료</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
