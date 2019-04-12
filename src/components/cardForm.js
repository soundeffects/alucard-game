import React, { Component } from 'react';

class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexes: [],
      ready: false
    };
  }

  handleClick(index) {
    const { indexes } = this.state,
          { limit } = this.props,
          setState = this.setState.bind(this);

    return function(e) {
      if (!e.target.checked) {
        e.target.checked = false;
        setState({ ready: false, indexes: indexes.filter(
          element => {
            return element !== index;
          })
        });
      } else if (indexes.length < limit) {
        e.target.checked = true;
        indexes.push(index);
        setState({ ready: indexes.length === limit,
          indexes: indexes });
      } else {
        e.target.checked = false;
      }
    }

  }

  render() {
    const { name, choices } = this.props,
          classNamer = index => {
      if (this.state.ready) {
        if (!this.state.indexes.includes(index)) {
          return 'grayed';
        } else {
          return 'checked';
        }
      }
    };

    return <form className='card-form center'>
      { Object.keys(choices).map((key, index) => {
          return <label className={'center ' + classNamer(index)} key={index}>
            <input type='checkbox' name={ name } value={ key.toLowerCase() }
              onClick={ this.handleClick(index) } />
            <img src={ choices[key] } alt='' />
            <div className='border' />
            <figcaption>{ key }</figcaption>
          </label>
        }) }
    </form>;
  }
}

export default CardForm;
