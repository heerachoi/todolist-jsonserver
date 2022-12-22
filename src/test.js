// src/App.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [todo, setTodo] = useState({
    title: '',
  });

  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:3001/todos');
    setTodos(data);
  };

  const onSubmitHandler = (todo) => {
    axios.post('http://localhost:3001/todos', todo);
  };

  // 새롭게 추가한 삭제 버튼 이벤트 핸들러
  const onClickDeleteButtonHandler = (todoId) => {
    axios.delete(`http://localhost:3001/todos/${todoId}`);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        <input
          type='text'
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              title: value,
            });
          }}
        />
        <button>추가하기</button>
      </form>
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>
            {todo.title}
            {/*  디자인이 요상하긴 하지만..! 삭제 버튼 추가 */}
            <button type='button' onClick={() => onClickDeleteButtonHandler(todo.id)}>
              삭제하기
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
