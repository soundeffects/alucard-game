import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import Char from './char';
import { intro } from '../localization/en';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textHeight: 150
    }

    this.handleAdvance = this.handleAdvance.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleAdvance(options) {
    const { advance } = this.props;
    return function() {
      advance(<Char advance={advance} />, options);
    }
  }

  handleExpand() {
    this.setState({ textHeight: "auto" });
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

      <div className="center">
        <button onClick={this.handleAdvance({ difficult: false })}>
          { intro.easy }
        </button>
        <button onClick={this.handleAdvance({ difficult: true })}>
          { intro.hard }
        </button>
      </div>
    </section>;
  }
}

export default Intro;
