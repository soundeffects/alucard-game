import React, { Component } from 'react';

import { char } from '../localization/en';
import gameState from '../core/state';

class Char extends Component {
  render() {
    console.log(gameState.difficulty);
    return <section id='char'>
      <h1>{ char.title }</h1>
    </section>;
  }
}

export default Char;
