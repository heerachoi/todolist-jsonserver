import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { TodoContainer, TodoForm, ItemContainer, InputBox, InputButton, TodoList, TodoItem, DeleteButton } from './App.js';

const App = () => {
  // 새롭게 생성되는 todo를 관리합니다.
  const [todo, setTodo] = useState({
    title: '',
  });

  const [todos, setTodos] = useState(null);
  const [targetId, setTargetId] = useState(null);

  // Todos 데이터를 서버에서 가져옵니다.
  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:3001/todos');
    setTodos(data);
  };

  // 서브밋 된 form의 todo를 todos에 저장합니다.
  const submitHandler = async (todo) => {
    axios.post('http://localhost:3001/todos', todo);
  };

  const deleteButtonHandler = (todoId) => {
    axios.delete(`http://localhost:3001/todos/${todoId}`);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContainer>
      <TodoForm
        onSubmit={(e) => {
          // e.preventDefault();
          submitHandler(todo);
        }}
      >
        <ItemContainer>
          <InputBox
            type='text'
            onChange={(ev) => {
              const { value } = ev.target;
              setTodo({
                ...todo,
                title: value,
              });
            }}
          />
          <InputButton>추가하기</InputButton>
        </ItemContainer>
      </TodoForm>
      <TodoList>
        {todos?.map((todo) => (
          <TodoItem key={todo.id}>
            {todo.title}
            <DeleteButton type='button' onClick={() => deleteButtonHandler(todo.id)}>
              삭제하기
            </DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </TodoContainer>
  );
};

export default App;
