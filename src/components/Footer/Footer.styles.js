// components/Footer/Footer.styles.js
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.secondaryColor};
  color: #fff;
  padding: 2rem 0;
  margin-top: 2rem;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  overflow: hidden;
  padding: 0 20px;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  font-family: inherit;

  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.primaryColor};
    outline-offset: 2px;
  }
`;

export const NewsletterForm = styled.form`
  margin-top: 1rem;
  display: flex;
  justify-content: center;

  input {
    padding: 10px;
    width: 200px;
  }

  button {
    margin-left: 10px;
    background-color: ${(props) => props.theme.primaryColor};
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.accentColor};
    }
  }
`;
