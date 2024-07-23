import React from "react";
import { MusicWrapper, Container, AlbumGrid, Album } from "./Music.styles";
import logo from "../../img/logo.jpg";
function Music() {
  return (
    <MusicWrapper id="music">
      <Container>
        <h2>Music</h2>
        <AlbumGrid>
          <Album>
            <img src={logo} alt="Album Name 5" />
            <h3>Album Name</h3>
            <p>Release Year: 2025</p>
          </Album>
          <Album>
            <img src={logo} alt="Album Name 5" />
            <h3>Album Name</h3>
            <p>Release Year: 2025</p>
          </Album>
          <Album>
            <img src={logo} alt="Album Name 5" />
            <h3>Album Name</h3>
            <p>Release Year: 2025</p>
          </Album>
          <Album>
            <img src={logo} alt="Album Name 5" />
            <h3>Album Name</h3>
            <p>Release Year: 2025</p>
          </Album>
          <Album>
            <img src={logo} alt="Album Name 5" />
            <h3>Album Name</h3>
            <p>Release Year: 2025</p>
          </Album>
          <Album>
            <img src={logo} alt="Album Name 5" />
            <h3>Album Name</h3>
            <p>Release Year: 2025</p>
          </Album>
          <Album>
            <img src={logo} alt="Album Name 5" />
            <h3>Album Name</h3>
            <p>Release Year: 2025</p>
          </Album>
          <Album>
            <img src={logo} alt="Album Name 5" />
            <h3>Album Name</h3>
            <p>Release Year: 2025</p>
          </Album>
          <Album>
            <img src={logo} alt="Album Name 4" />
            <h3>Album Name</h3>
            <p>Release Year: 2023</p>
          </Album>
          <Album>
            <img src={logo} alt="Album Name 3" />
            <h3>Album Name</h3>
            <p>Release Year: 2019</p>
          </Album>
          <Album>
            <img src={logo} alt="Album Name 2" />
            <h3>Album Name</h3>
            <p>Release Year: 2018</p>
          </Album>
          <Album>
            <img src={logo} alt="Album Name 1" />
            <h3>Album Name</h3>
            <p>Release Year: 2015</p>
          </Album>
          {/* Add more albums */}
        </AlbumGrid>
      </Container>
    </MusicWrapper>
  );
}

export default Music;
