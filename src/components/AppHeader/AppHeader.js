import React, { Component } from 'react';

import './AppHeader.scss';

export default class AppHeader extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <img className="app-logo" src="/assets/img/feststrona.png" alt="feststrona" />
          <div className="header-cloud cloud-1">
            <h2>Potrzebujesz<br/>strony internetowej?</h2>
          </div>
          <div className="header-cloud cloud-2">
            <h2>A może plakatu,<br/>ulotki, wizytówki?</h2>
          </div>
          <div className="header-cloud cloud-3">
            <img src="/assets/img/mail_primary.png" />
            <h2>Skontaktuj się z nami!</h2>
          </div>
        </div>
      </header>
    );
  }
}
