import React, { Component } from 'react';

import './AboutUs.scss';

export default class AboutUs extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container about-us-container">
        <h2>Poznaj nas</h2>
        <div className="row people-container">
          <div className="col-md-6 person-container">
            <div className="person-photo">
              <img className="front" src="/assets/img/wojciech.png" />
              <img className="back" src="/assets/img/wojciech_back.png" />
            </div>
            <h3>Wojciech Moska</h3>
            <p>Chop od stron internetowych</p>
          </div>
          <div className="col-md-6 person-container">
          <div className="person-photo">
            <img className="front" src="/assets/img/paulina.png" />
            <img className="back" src="/assets/img/paulina_back.png" />
          </div>
            <h3>Paulina Kwaśny</h3>
            <p>Frela od grafik i marketingu</p>
          </div>
        </div>
      </div>
    );
  }
}
