// components/Home/Home.js
import React from "react";
import { HomeWrapper, Hero, Content, FeaturedContent } from "./Home.styles";
import hero from "../../img/hero.jpg";
function Home() {
  return (
    <HomeWrapper id="home">
      <Hero>
        <h2>Welcome to Maalam Name's Official Website</h2>
        <img src={hero} alt="Maalam performing" />
      </Hero>
      <Content>
        <p>Experience the soul-stirring rhythms of Gnawa music...</p>
        <FeaturedContent>
          <h3>Latest Album</h3>
          {/* Add album details */}
        </FeaturedContent>
      </Content>
    </HomeWrapper>
  );
}

export default Home;
