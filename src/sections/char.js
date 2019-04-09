import React, { Component } from 'react';

import CardForm from '../components/cardForm';

import appearances from '../images/appearances';

import { char } from '../localization/en';

class Char extends Component {
  render() {
    return <section id='char'>
      <h1>{ char.title }</h1>
      <p>{ char.description1 }</p>
      <h2>{ char.heading1 }</h2>
      <CardForm name='appearances' choices={appearances} limit={1} />
      <h2>{ char.heading2 }</h2>
    </section>;
  }
}

export default Char;
