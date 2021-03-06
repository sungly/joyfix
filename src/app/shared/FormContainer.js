import styled from 'styled-components';

const FormContainer = styled.div`
  width: 400px;

  input[type='text'],
  input[type='password'],
  input[type='tel'],
  input[type='email'],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type='textbox'],
  select {
    width: 100%;
    height: 100px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type='submit'] {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type='submit']:hover {
    background-color: #45a049;
  }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;

const ErrorMessage = styled.p`
  color: #d8000c;
`;

export default {
  PageContainer,
  FormContainer,
  Button,
  ErrorMessage
};
