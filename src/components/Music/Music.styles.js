import styled from "styled-components";

export const MusicWrapper = styled.div`
  background-color: #f5f5dc;
  padding: 2rem 0;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
`;

export const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const Album = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    color: #4b0082;
    margin-top: 1rem;
  }
`;
