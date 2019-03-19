import React, { Component } from 'react';

import { char } from '../localization/en';

class Char extends Component {
  render() {
    return <section id='char'>
      <h1>{ char.title }</h1>
    </section>;
  }
}

export default Char;
