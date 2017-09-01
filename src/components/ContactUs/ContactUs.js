import React, { Component } from 'react';

import './ContactUs.scss';

export default class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.email = "kontakt@feststrona.pl";
  }

  render() {
    return (
      <div className="contact-us-container">
        <div className="contact-us-section contact-us-text">
          <h2>Skontaktuj się z nami</h2>
          <p>Odpiszemy najszybciej jak się da!</p>
        </div>
        <div className="contact-us-section contact-us-mail">
          <a href={"mailto:" + this.email}>
            <img src="/assets/img/contact_us.png" />
            {this.email}
          </a>
        </div>
      </div>
    );
  }
}
