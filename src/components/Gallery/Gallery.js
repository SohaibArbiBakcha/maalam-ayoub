import React from "react";
import { GalleryWrapper, Container, ImageGrid, Image } from "./Gallery.styles";
import hero from "../../img/hero.jpg";
function Gallery() {
  return (
    <GalleryWrapper id="gallery">
      <Container>
        <h2>Gallery</h2>
        <ImageGrid>
          <Image src={hero} alt="Performance 1" />
          <Image src={hero} alt="Performance 2" />
          <Image src={hero} alt="Performance 3" />
          <Image src={hero} alt="Performance 4" />
          <Image src={hero} alt="Performance 4" />
          <Image src={hero} alt="Performance 4" />
          <Image src={hero} alt="Performance 4" />
          <Image src={hero} alt="Performance 4" />
          <Image src={hero} alt="Performance 4" />
          <Image src={hero} alt="Performance 4" />
          {/* Add more images */}
        </ImageGrid>
      </Container>
    </GalleryWrapper>
  );
}

export default Gallery;
