import React, { Component } from 'react';

import Footer from './footer';
import Intro from '../sections/intro';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAdvance = this.handleAdvance.bind(this);
    this.state = { section: <Intro /> };
  }

  handleAdvance(section) {
    this.setState({ section: section });
  }

  render() {
    return <div className='app'>
      { this.state.section }
      <Footer advance={this.handleAdvance} section={this.state.section} />
    </div>;
  }
}

export default App;
