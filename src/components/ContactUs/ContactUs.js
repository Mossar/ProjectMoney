import React, { Component } from 'react';
import EmailValidator from 'email-validator';

import './ContactUs.scss';

export default class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.email = "kontakt@feststrona.pl";
    this.state = {
      userEmail: "",
      userText: "",
      message: "",
      sending: false
    }
  }

  mailChange(e) {
    this.setState({
      message: "",
      userEmail: e.target.value
    });
  }

  textChange(e) {
    this.setState({
      message: "",
      userText: e.target.value
    });
  }

  canSend() {
    if(this.state.sending) return false;
    if(!this.state.userEmail || !this.state.userText) return false;
    if(!EmailValidator.validate(this.state.userEmail)) return false;
    return true;
  }

  sendMail(e) {
    e.preventDefault();
    if(!this.canSend()) {
      return this.setState({ message: "Uzupełnij wszystkie pola poprawnie!" });
    }

    this.setState({ sending: true });
    emailjs.send("gmail","feststrona", { mail: this.state.userEmail, message: this.state.userText })
      .then( response => {
        this.setState({
          message: "Wysłano maila. Odpiszemy na niego najszybciej jak to możliwe.",
          sending: false
        })
      }, err => {
        this.setState({
          message: "Nie udało się wysłać maila. Spróbuj ponownie.",
          sending: false
      })
    });

  }

  renderMessage() {
    if (this.state.message) {
      return <p className="mail-message">{this.state.message}</p>
    }
    return "";
  }

  render() {
    return (
      <div className="contact-us-container">
        <div className="contact-us-section contact-us-text">
          <h2>Skontaktuj się z nami</h2>
          <p>Odpiszemy najszybciej jak się da!</p>
          <a className="mail-link" href={"mailto:" + this.email}>
            <img src="/assets/img/contact_us.png" />
            {this.email}
          </a>
        </div>
        <div className="contact-us-section contact-us-mail">
          <form className="contact-form" onSubmit={this.sendMail.bind(this)}>
            <input type="email" className="form-control" placeholder="Twój e-mail.."
                  value={this.state.userEmail} onChange={this.mailChange.bind(this)} />
            <textarea className="form-control" placeholder="Czego potrzebujesz?"
                  value={this.state.userText} onChange={this.textChange.bind(this)} />
            <button className="btn btn-primary" type="submit">Wyślij!</button>
          </form>
          {this.renderMessage()}
        </div>
      </div>
    );
  }
}
