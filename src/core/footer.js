import React, { Component } from 'react';

import { footer } from '../localization/en';

import Intro from '../sections/intro';
import Char from '../sections/char';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [Intro, Char]
    };

    this.handleAdvance = this.handleAdvance.bind(this);
  }

  getButton(options={}, label=footer.next) {
    return <button onClick={this.handleAdvance(options)}>
      { label }
    </button>;
  }

  handleAdvance(options={}) {
    const { sections } = this.state,
          { gameState } = this.props,
          index = sections.indexOf(gameState().section);

    return function() {
      gameState({ section: sections[index+1], ready: false, ...options })
    }
  }

  render() {
    let button;
    const { gameState } = this.props;
    
    if (gameState().ready) {
      if (gameState().section === Intro) {
        button = [
          this.getButton({ difficulty: false }, footer.easy),
          this.getButton({ difficulty: true }, footer.hard)
        ]
      } else {
        button = this.getButton();
      }
    }

    return <footer class="center">
      { button }
    </footer>;
  }
}

export default Footer;
