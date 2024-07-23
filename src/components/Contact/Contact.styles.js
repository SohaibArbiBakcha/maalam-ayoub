import styled from "styled-components";

export const ContactWrapper = styled.section`
  background-color: #f5f5dc;
  padding: 2rem 0;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 2rem auto;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

export const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

export const Button = styled.button`
  background-color: #d4af37;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #8b4513;
  }
`;
