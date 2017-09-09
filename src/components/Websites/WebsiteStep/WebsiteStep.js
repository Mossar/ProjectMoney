import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './WebsiteStep.scss';

export default class WebsiteStep extends Component {

  renderImage() {
    var imageUrl = "/assets/img/step" + this.props.step.id + ".png";
    return (
      <div className="col-sm-4 hidden-xs-down website-step-image">
        <img src={imageUrl} />
      </div>
    );
  }

  renderText() {
    return (
      <div className="col-sm-7 website-step-text">
        <h3>{this.props.step.title}</h3>
        <p>{this.props.step.description}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="website-step-container scroll-displaying">
        <div className="row">
          {this.props.step.id % 2 == 0 ? this.renderText() : null}
          {this.renderImage()}
          {this.props.step.id % 2 == 1 ? this.renderText() : null}
        </div>
      </div>
    );
  }
}
