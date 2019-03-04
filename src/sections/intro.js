import React, { Component } from 'react';

import Char from './char';
import { intro } from '../localization/en';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.handleAdvance = this.handleAdvance.bind(this);
  }

  handleAdvance(options) {
    const { advance } = this.props;
    return function() {
      advance(<Char advance={advance} />, options);
    }
  }

  render() {
    return <section id='intro'>
      <h1>{ intro.title }</h1>
      { intro.body.map(paragraph => <p>{ paragraph }</p>) }
      <p><strong>{ intro.tldr }</strong></p>

      <h2>{ intro.prompt }</h2>
      <button onClick={this.handleAdvance({ difficult: false })}>
        { intro.easy }
      </button>
      <button onClick={this.handleAdvance({ difficult: true })}>
        { intro.hard }
      </button>
    </section>;
  }
}

export default Intro;
