import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import MyBtns from "../components/MyBtns";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "YN6x4QN8i2nwfIfD1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        e.target.reset();
      });
  };
  return (
    <>
      <Container className="w-50 mt-5 mb-5">
        <h2>Contact</h2>
        <Row>
          <form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="contactText" column="lg" lg={6}>
                First and last name
              </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                name="user_name"
                placeholder="First/Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="contactText " column="lg" lg={6}>
                Email address
              </Form.Label>
              <Form.Control
                name="user_email"
                size="lg"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="contactText">
                Your email addresses will never be share with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label name="message" className="contactText">
                Message
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your message"
                name="message"
              />
            </Form.Group>
            <MyBtns name="Submit" />
          </form>
        </Row>
      </Container>
    </>
  );
}
