import React, { Component } from 'react';

import { char } from '../localization/en';

import ChoiceCard from '../components/choiceCard';

class Char extends Component {
  render() {
    return <section id='char'>
      <h1>{ char.title }</h1>
      <p>You're kind of stuck as Alucard, but you can still choose your style and personality.</p>
      <h2>Appearance</h2>
      <form>
        { ChoiceCard('Lisa', 'https://via.placeholder.com/150', 'placeholder image', 'avatar') }
        
        <input type='radio' name='avatar' value='riza' />
        <input type='radio' name='avatar' value='etc' />
      </form>
      <h2>Personality</h2>
    </section>;
  }
}

export default Char;
