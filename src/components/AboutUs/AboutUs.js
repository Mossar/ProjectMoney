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
          <div className="col-xs-6 person-container">
            <img src="/assets/img/wojciech.png" />
            <h3>Wojciech Moska</h3>
            <p>Chop od stron internetowych</p>
          </div>
          <div className="col-xs-6 person-container">
            <img src="/assets/img/paulina.png" />
            <h3>Paulina Kwaśny</h3>
            <p>Frela od grafik i marketingu</p>
          </div>
        </div>
      </div>
    );
  }
}
