import React, { Component } from "react";
import styled from "styled-components";

const ContactForm = styled.form`
  background: white;
  padding-top: 100px;
`;

class Contact extends Component {
  render() {
    return (
      <ContactForm>
        <input placeholder="Name" />
        <input placeholder="hello" />
        <textarea />
      </ContactForm>
    );
  }
}

export default Contact;
