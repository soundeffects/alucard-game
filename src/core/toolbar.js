import React, { Component } from 'react';
import Draggable from 'react-draggable';

import { toolbar } from '../localization/en';

import Intro from '../sections/intro';
import Char from '../sections/char';

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [Intro, Char]
    };

    this.handleAdvance = this.handleAdvance.bind(this);
  }

  getButton(label=toolbar.next, options={}) {
    if (this.props.gameState().ready) {
      return <button onClick={this.handleAdvance(options)}>
        { label }
      </button>;
    } else {
      return <button className="disabled">
        { label }
      </button>;
    }
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
    
    if (gameState().section === Intro) {
      button = [
        this.getButton(toolbar.easy, { difficulty: false }),
        this.getButton(toolbar.hard, { difficulty: true })
      ]
    } else {
      button = this.getButton();
    }

    return <Draggable><footer className="center">
      { button }
    </footer></Draggable>;
  }
}

export default Toolbar;
