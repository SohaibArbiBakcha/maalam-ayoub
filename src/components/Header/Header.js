// components/Header/Header.js
import React from "react";
import {
  HeaderWrapper,
  Container,
  HeaderTitle,
  Nav,
  NavButton,
} from "./Header.styles";

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderTitle>Maalam Ayoub-Rasta</HeaderTitle>
        <Nav>
          <ul>
            <li>
              <NavButton onClick={() => scrollToSection("home")}>
                Home
              </NavButton>
            </li>
            <li>
              <NavButton onClick={() => scrollToSection("biography")}>
                Biography
              </NavButton>
            </li>
            <li>
              <NavButton onClick={() => scrollToSection("music")}>
                Music
              </NavButton>
            </li>
            <li>
              <NavButton onClick={() => scrollToSection("gallery")}>
                Gallery
              </NavButton>
            </li>
            <li>
              <NavButton onClick={() => scrollToSection("events")}>
                Events
              </NavButton>
            </li>
            <li>
              <NavButton onClick={() => scrollToSection("contact")}>
                Contact
              </NavButton>
            </li>
          </ul>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
