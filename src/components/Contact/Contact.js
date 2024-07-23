import React from "react";
import {
  ContactWrapper,
  Container,
  Form,
  Input,
  TextArea,
  Button,
} from "./Contact.styles";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <Container>
        <h2>Contact</h2>
        <Form>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <TextArea placeholder="Message"></TextArea>
          <Button type="submit">Send</Button>
        </Form>
      </Container>
    </ContactWrapper>
  );
}

export default Contact;
