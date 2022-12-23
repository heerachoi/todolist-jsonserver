import styled from 'styled-components';

export const TodoContainer = styled.div`
  /* width: 100%; */
`;

export const TodoForm = styled.form``;

export const ItemContainer = styled.div`
  background-color: #ffeddb;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;
export const InputBox = styled.input`
  border: 2px solid #ff982d;
  border-radius: 5px;
  width: 400px;
  margin-right: 15px;
  font-size: 20px;
`;

export const InputButton = styled.button`
  border-radius: 5px;
  border: 2px solid #ff982d;
  background-color: transparent;
  color: #ff982d;
  font-size: 20px;
  font-weight: 600;
  width: 130px;
  cursor: pointer;
  &:hover {
    background-color: #ff982d;
    color: #fff;
  }
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoItem = styled.div`
  padding: 10px;
`;

export const DeleteButton = styled.button`
  border: 1px solid #ff982d;
  background-color: transparent;
  margin-left: 10px;
`;
