import React, { Component } from 'react';

import Intro from './sections/intro';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAdvance = this.handleAdvance.bind(this);
    this.state = { section: <Intro advance={this.handleAdvance} /> };
  }

  handleAdvance(section, options={}) {
    this.setState({ section: section, ...options });
  }

  render() {
    return <div className='app'>
      { this.state.section }
    </div>;
  }
}

export default App;
