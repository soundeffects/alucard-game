import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import { intro } from '../localization/en';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textHeight: 150
    }

    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState({ textHeight: 'auto' });
  }

  render() {
    const height = this.state.textHeight;

    return <section id='intro'>
      <h1>{ intro.title }</h1>

      <AnimateHeight duration={500} height={height}>
        { intro.body.map(paragraph => <p>{ paragraph }</p>) }
      </AnimateHeight>
      { height === 150 ? <button onClick={this.handleExpand}>{ intro.expand }</button> : null }

      <p><strong>{ intro.tldr }</strong></p>
    </section>;
  }
}

export default Intro;
