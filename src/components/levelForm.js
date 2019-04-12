import React, { Component } from 'react';

class LevelForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleClick() {

  }

  render() {
    const { choices } = this.props,
          keys = Object.keys(choices),
          { index } = this.state;

    return <form className='level-form'>
      <img src={choices[keys[index]]} alt='' />
    </form>;
  }
}

export default LevelForm;
