import React, { Component } from 'react';

import './AppFooter.scss';

export default class AppFooter extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <ul className="list-unstyled">
                <li>Wojciech Moska</li>
                <li>ul. Nowa 7/38A</li>
                <li>41-600 Świętochłowice</li>
                <li><a href="mailto:kontakt@feststrona.pl"><strong>kontakt@feststrona.pl</strong></a></li>
              </ul>
            </div>
            <div className="col-xs-6 social-media">
              <h3>Odwiedź nas na</h3>
              <a href><img src="/assets/img/instagram.png" /></a>
              <a href><img src="/assets/img/facebook.png" /></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
