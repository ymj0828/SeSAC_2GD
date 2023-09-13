const initialState = {
  list: [
    {
      id: 0,
      text: "리액트 공부하기",
      done: false,
    },
    {
      id: 1,
      text: "척추의 요정이 말합니다! 척추 펴기!",
      done: false,
    },
    {
      id: 2,
      text: "운동하기",
      done: false,
    },
  ],
};
// id 전역 관리를 위한 initialState.nextID
let count = initialState.list.length;
initialState['nextID'] = count;

const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

export function create(payload) {
  return {
    type: CREATE,
    payload, //object
  };
}
export function done(id) {
  return {
    type: DONE,
    id, // number
  };
}

export function todo(state = initialState, action) {
  /* 
  action = {
    type:'todo/CREATE',
    payload:{
      id:3,
      text:'점심먹기'
    }
  }

  action = {
    type:'todo/DONE'
    id:0,
  }
  */
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID:action.payload.id + 1,
      };
    case DONE:
      // 기존 list 에서의 id와 action으로 들어온 id가 같다면
      // done:false -> true
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              // id: 0,
              // text: "리액트 공부하기",
              // done: false,
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
