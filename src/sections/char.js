import React, { Component } from 'react';

import PickerForm from '../components/pickerForm';
import LevelForm from '../components/levelForm';

import lang from '../localization/';

import contentImport from '../core/contentImport';
const appearances = contentImport('appearances', 'char');
const personality = contentImport('personality', 'char');
const flavor = contentImport('flavor', 'char');


class Char extends Component {
  render() {

    return <section id='char'>
      <h1>{ lang.char.title }</h1>
      <p>{ lang.char.description1 }</p>
      <h2>{ lang.char.heading1 }</h2>
      <PickerForm choices={appearances} />
      <h2>{ lang.char.heading2 }</h2>
      <LevelForm choices={personality} />
      <h2>{ lang.char.heading3 }</h2>
    </section>;
  }
}

export default Char;
