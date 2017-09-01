import React, { Component } from 'react';
import WebsiteStep from './WebsiteStep/WebsiteStep';

import './Websites.scss';

export default class Websites extends Component {

  constructor(props) {
    super(props);
    this.steps = [
      {
        id: 1,
        title: "Kontaktujesz się z nami",
        description: "W mailu opisz czego potrzebujesz, a my najszybciej jak się da dopytamy o szczegóły. Wysyłamy Ci przykładowe szablony, tak byś mógł łatwiej określić jaka strona Ci odpowiada."
      },
      {
        id: 2,
        title: "Tworzymy dla Ciebie projekt graficzny",
        description: "Jak tylko uzgodnimy detale, zabieramy się za przygotowanie dla Ciebie projektu graficznego. Następnie wysyłamy go do Ciebie i wdrażamy ewentualne poprawki."
      },
      {
        id: 3,
        title: "Realizujemy stronę internetową",
        description: "Po zaakceptowaniu projektu błyskawicznie realizujemy stronę internetową. Kiedy wszystko jest gotowe, finalizujemy zamówienie i możesz cieszyć się nowoczesną i ładną stroną internetową!"
      }
    ];
  }

  renderSteps() {
    return this.steps.map(function(step, index) {
      return <WebsiteStep key={step.id} step={step}></WebsiteStep>
    });
  }

  render() {
    return (
      <div className="container websites-container">
        <h2>Jak tworzymy strony?</h2>
        {this.renderSteps()}
      </div>
    );
  }
}
