import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  // ... other styles ...
  

  section {
    padding-top: 60px; // Adjust this value based on your header height
    scroll-margin-top: 60px; // This ensures the section doesn't get hidden behind the header when scrolled to
  }
`;

export default GlobalStyles;
