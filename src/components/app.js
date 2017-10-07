import React, { Component } from 'react';
import AppHeader from './AppHeader/AppHeader';
import Websites from './Websites/Websites';
import ContactUs from './ContactUs/ContactUs';
import Graphics from './Graphics/Graphics';
import AboutUs from './AboutUs/AboutUs';
import AppFooter from './AppFooter/AppFooter';

import '../../style/forms.scss';
import './app.scss';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.sections = {};
  }

  componentDidMount() {
    const scrollDisplayingElements = document.getElementsByClassName("scroll-displaying");
    window.addEventListener('scroll', () =>{
      let supportPageOffset = window.pageXOffset !== undefined;
      let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
      let scroll = {
         x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
         y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
      };

      for(var i = 0; i < scrollDisplayingElements.length; i++) {
        if(scrollDisplayingElements[i].classList.contains("displayed")) continue;

        var offset = scrollDisplayingElements[i].offsetTop;
        if(scroll.y > offset - 400) {
          scrollDisplayingElements[i].className += " displayed";
        }
      }
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        <AppHeader sections={this.sections}></AppHeader>
        <Websites ref={(ref) => this.sections.websites = ref}></Websites>
        <ContactUs ref={(ref) => this.sections.contactUs = ref}></ContactUs>
        <Graphics ref={(ref) => this.sections.graphics = ref}></Graphics>
        <AboutUs ref={(ref) => this.sections.aboutUs = ref}></AboutUs>
        <AppFooter></AppFooter>
      </div>
    );
  }
}
