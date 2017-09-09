import React, { Component } from 'react';

import './Graphics.scss';

export default class Graphics extends Component {

  constructor(props) {
    super(props);
    this.graphicTypes = ["Plakat reklamowy", "Projekt strony internetowej", "Ulotka, broszura",
                         "Grafiki reklamowe", "Wizytówki", "Inne", "Grafiki social-media"];
  }

  render() {
    return (
      <div className="container graphics-container">
        <h2>Potrzebujesz czegoś innego?</h2>
        <p>Nie ma problemu, skontaktuj się z nami mailowo, a uzgodnimy szczegóły. Mamy doświadczenie w tworzeniu różnorodnych grafik komercyjno-reklamowych.</p>
        <ul>
          {this.graphicTypes.map(function(type, index) {
            return (<li key={index}>{type}</li>);
          })}
        </ul>
      </div>
    );
  }
}
