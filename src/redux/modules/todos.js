import { v4 as uuidv4 } from 'uuid';

// action types
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SWITCH_BUTTON = 'SWITCH_BUTTON';

// action creators
// 투두 추가
export const addTodo = (id, text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: id,
      text: text,
      isCompleted: false,
    },
  };
};

// 투두 삭제
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id: id },
  };
};

// 완료 버튼
export const switchButton = (id) => {
  return {
    type: SWITCH_BUTTON,
    payload: { id: id },
  };
};

const initialState = [
  {
    id: uuidv4(),
    test: '알고리즘 문제 풀기',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    text: 'Todo list 만들기',
    isCompleted: true,
  },
];

export default function todoReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          id: payload.id,
          text: payload.text,
          isCompleted: false,
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    case SWITCH_BUTTON:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo)),
      };
    default:
      return { ...state };
  }
}
