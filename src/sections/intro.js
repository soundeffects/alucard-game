import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import lang from '../localization/';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textHeight: 150
    }

    this.handleExpand = this.handleExpand.bind(this);
  }

  handleReady() {
    this.props.gameState({ ready: true });
  }

  handleExpand() {
    this.setState({ textHeight: 'auto' });
  }

  render() {
    const height = this.state.textHeight;

    return <section id='intro'>
      <h1>{ lang.intro.title }</h1>

      <AnimateHeight duration={500} height={height}>
        { lang.intro.body.map((paragraph, index) => <p key={index}>{ paragraph }</p>) }
      </AnimateHeight>
      { height === 150 ? <button onClick={this.handleExpand}>{ lang.intro.expand }</button> : null }

      <p><strong>{ lang.intro.tldr }</strong></p>
    </section>;
  }
}

export default Intro;
