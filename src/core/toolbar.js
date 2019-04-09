import React, { Component } from 'react';

import { toolbar } from '../localization/en';

import Intro from '../sections/intro';
import Char from '../sections/char';

import Button from '../components/button';

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [Intro, Char]
    };

    this.handleAdvance = this.handleAdvance.bind(this);
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
    var buttons = [];
    const { gameState } = this.props,
          disabled = !gameState().ready;

    //buttons.push(Button(toolbar.inv, null));

    if (gameState().section === Intro) {
      buttons.push(Button(
        toolbar.easy,
        this.handleAdvance({ difficulty: false }),
        disabled));
      buttons.push(Button(
        toolbar.hard,
        this.handleAdvance({ difficulty: true }),
        disabled));
    } else {
      buttons.push(Button(toolbar.next, this.handleAdvance(), disabled));
    }

    return <footer className="center">
      { buttons }
    </footer>;
  }
}

export default Toolbar;
