import React, { Component } from 'react';
import AppHeader from './AppHeader/AppHeader';
import Websites from './Websites/Websites';
import ContactUs from './ContactUs/ContactUs';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <AppHeader></AppHeader>
        <Websites></Websites>
        <ContactUs></ContactUs>
      </div>
    );
  }
}
