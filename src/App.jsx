import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { TodoContainer, TodoForm, ItemContainer, InputBox, InputButton } from './App.js';

const App = () => {
  // 새롭게 생성되는 todo를 관리합니다.
  const [todos, setTodos] = useState(null);

  // Todos 데이터를 서버에서 가져옵니다.
  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:3001/todos');
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContainer>
      <TodoForm>
        <ItemContainer>
          <InputBox type='text' />
          <InputButton>추가하기</InputButton>
        </ItemContainer>
      </TodoForm>
    </TodoContainer>
  );
};

export default App;
