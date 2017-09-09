import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import './AppHeader.scss';

export default class AppHeader extends Component {
  render() {
    return (
      <header>
        <div className="logo-container">
          <div className="container">
            <img className="app-logo" src="/assets/img/feststrona.png" alt="feststrona" />
            <ul className="list-inline main-menu">
              <li onClick={() => scrollToComponent(this.props.sections.websites, { align: 'top' })}>STRONY INTERNETOWE</li>
              <li onClick={() => scrollToComponent(this.props.sections.graphics, { align: 'top' })}>GRAFIKI</li>
              <li onClick={() => scrollToComponent(this.props.sections.contactUs, { align: 'top', offset: -50 })}>KONTAKT</li>
              <li onClick={() => scrollToComponent(this.props.sections.aboutUs, { align: 'top' })}>O NAS</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="header-cloud cloud-1">
            <h2>Potrzebujesz<br/>strony internetowej?</h2>
          </div>
          <div className="header-cloud cloud-2">
            <h2>A może plakatu,<br/>ulotki, wizytówki?</h2>
          </div>
          <div className="header-cloud cloud-3" onClick={() => scrollToComponent(this.props.sections.contactUs, { align: 'top', offset: -50 })}>
            <img src="/assets/img/mail_primary.png" />
            <h2>Skontaktuj się z nami!</h2>
          </div>
        </div>
      </header>
    );
  }
}
