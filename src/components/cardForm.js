import React, { Component } from 'react';

class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amtChecked: 0,
      ready: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { amtChecked } = this.state,
          { limit } = this.props;

    if (!e.target.checked) {
      e.target.checked = false;
      this.setState({ ready: false, amtChecked: amtChecked - 1 });
    } else if (amtChecked < limit) {
      e.target.checked = true;
      this.setState({ ready: amtChecked + 1 === limit, amtChecked: amtChecked + 1 });
    } else {
      e.target.checked = false;
    }
  }

  render() {
    const { name, choices } = this.props;

    return <form className='card-form center'>
      { Object.keys(choices).map((key, index) => {
          return <label className={this.state.ready ? 'grayed' : null} key={index}>
            <input type='checkbox' name={ name } value={ key.toLowerCase() } onClick={ this.handleClick } />
            <img src={ choices[key] } alt='' />
            <figcaption>{ key }</figcaption>
          </label>
        }) }
    </form>;
  }
}

export default CardForm;
