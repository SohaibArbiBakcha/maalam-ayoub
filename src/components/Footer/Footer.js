// components/Footer/Footer.js
import React from "react";
import {
  FooterWrapper,
  Container,
  Nav,
  NewsletterForm,
  NavButton,
} from "./Footer.styles";

function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FooterWrapper>
      <Container>
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
        <p>&copy; 2024 Maalam Name. All rights reserved.</p>
        <NewsletterForm>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </NewsletterForm>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
