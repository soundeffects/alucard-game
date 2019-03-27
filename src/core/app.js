import React, { Component } from 'react';

import Toolbar from './toolbar';
import Intro from '../sections/intro';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: Intro,
      ready: true
    };
    this.gameState = this.gameState.bind(this);
  }

  gameState(update = null) {
    if (update) {
      this.setState(update);
    } else {
      return this.state;
    }
  }

  render() {
    const Section = this.state.section;
    return <div className='app'>
      <Section gameState={this.gameState}/>
      <div className='center'>
        <Toolbar gameState={this.gameState}/>
      </div>
    </div>;
  }
}

export default App;
