// src/App.js
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { AppWrapper } from "./App.styles";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Biography from "./components/Biography/Biography";
import Music from "./components/Music/Music";
import Gallery from "./components/Gallery/Gallery";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
        <Header />
        <Home />
        <Biography />
        <Music />
        <Gallery />
        <Events />
        <Contact />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
