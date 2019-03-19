import React, { Component } from 'react';

import Footer from './footer';
import Intro from '../sections/intro';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: Intro
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
      <Footer gameState={this.gameState}/>
    </div>;
  }
}

export default App;
