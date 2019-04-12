import React, { Component } from 'react';

class PickerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  handleClick(direction) {
    const { index } = this.state,
          length = Object.keys(this.props.choices).length;

    return function(e) {
      e.preventDefault();
      if (index + direction < 0) {
        this.setState({ index: length - 1 });
      } else if (index + direction > length - 1) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: index + direction });
      }
    }.bind(this);
  }

  render() {
    const { choices } = this.props,
          selected = choices[Object.keys(choices)[this.state.index]];

    return <form className='picker-form'>
      <img src={ selected.image } alt='' />
      <div className='center'>
        <button className='left' onClick={this.handleClick(-1)} >
          <i className="fas fa-chevron-left" />
        </button>
        <figcaption>{ selected.name }</figcaption>
        <button className='right' onClick={this.handleClick(1)} >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </form>;
  }
}

export default PickerForm;
