import React, { Component } from 'react';

import './AppHeader.scss';

export default class AppHeader extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <img className="app-logo" src="/assets/img/feststrona.png" alt="feststrona" />
          <div className="header-cloud cloud-1">
            Potrzebujesz<br/>strony internetowej?
          </div>
          <div className="header-cloud cloud-2">
            A może plakatu,<br/>ulotki, wizytówki?
          </div>
          <div className="header-cloud cloud-3">
            <img src="/assets/img/mail_primary.png" />
            Skontaktuj się z nami!
          </div>
        </div>
      </header>
    );
  }
}
