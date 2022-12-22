import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { TodoContainer, TodoForm, ItemContainer, InputBox, InputButton } from './App.js';

const App = () => {
  // 새롭게 생성되는 todo를 관리합니다.
  const [todo, setTodo] = useState({
    title: '',
  });

  const [todos, setTodos] = useState(null);

  // Todos 데이터를 서버에서 가져옵니다.
  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:3001/todos');
    setTodos(data);
  };

  // 서브밋 된 form의 todo를 todos에 저장합니다.
  const submitHandler = async (todo) => {
    await axios.post('http://localhost:3001/todos', todo);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContainer>
      <TodoForm
        onSubmit={(event) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
          event.preventDefault();
          submitHandler(todo);
        }}
      >
        <ItemContainer>
          <InputBox
            type='text'
            onChange={(event) => {
              const { inputValue } = event.target;
              setTodo({
                ...todo,
                title: inputValue,
              });
            }}
          />
          <InputButton>추가하기</InputButton>
        </ItemContainer>
      </TodoForm>
      {todos?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </TodoContainer>
  );
};

export default App;
