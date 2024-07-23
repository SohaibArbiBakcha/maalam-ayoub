import styled from "styled-components";

export const GalleryWrapper = styled.section`
  background-color: #f5f5dc;
  padding: 2rem 0;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
`;
