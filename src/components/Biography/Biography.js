import React from "react";
import {
  BiographyWrapper,
  Container,
  Timeline,
  TimelineItem,
} from "./Biography.styles";

function Biography() {
  return (
    <BiographyWrapper id="biography">
      <Container>
        <h2>Biography</h2>
        <p>Detailed story of the maalam's life and musical journey...</p>
        <Timeline>
          <TimelineItem>
            <h3>1980</h3>
            <p>Born in Essaouira, Morocco</p>
          </TimelineItem>
          {/* Add more timeline items */}
        </Timeline>
      </Container>
    </BiographyWrapper>
  );
}

export default Biography;
