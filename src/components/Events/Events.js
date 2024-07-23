import React from "react";
import {
  EventsWrapper,
  Container,
  EventList,
  EventItem,
} from "./Events.styles";

function Events() {
  return (
    <EventsWrapper id="events">
      <Container>
        <h2>Events</h2>
        <EventList>
          <EventItem>
            <h3>Gnaoua Festival</h3>
            <p>Date: June 20, 2025</p>
            <p>Location: Essaouira, Morocco</p>
          </EventItem>
          <EventItem>
            <h3>Gnaoua Festival</h3>
            <p>Date: June 20, 2024</p>
            <p>Location: Essaouira, Morocco</p>
          </EventItem>
          {/* Add more events */}
        </EventList>
      </Container>
    </EventsWrapper>
  );
}

export default Events;
