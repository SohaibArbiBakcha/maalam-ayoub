// components/Header/Header.styles.js
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.secondaryColor};
  color: #fff;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.primaryColor};
  margin: 0;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-left: 20px;
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
