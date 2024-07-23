import styled from "styled-components";

export const EventsWrapper = styled.section`
  background-color: #f5f5dc;
  padding: 2rem 0;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
`;

export const EventList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const EventItem = styled.li`
  background-color: #fff;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h3 {
    color: #4b0082;
  }
`;
