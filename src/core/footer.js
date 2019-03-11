import React, { Component } from 'react';

import Char from '../sections/char';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = { difficultyView: true };
    this.handleAdvance = this.handleAdvance.bind(this);
  }

  handleAdvance() {
    this.props.advance(this.props.section.handleAdvance());
  }

  render() {
    return <footer>
      <button onClick={this.handleAdvance}>
        Test
      </button>
    </footer>;
  }
}

export default Footer;