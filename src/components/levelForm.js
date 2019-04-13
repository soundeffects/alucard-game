import React, { Component } from 'react';
import _ from 'lodash';

class LevelForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      levels: Array(Object.keys(props.choices).length)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, value) {
    return function() {
      let { levels } = this.state;
      levels[index] = value;
      this.setState({ levels: levels });
    }.bind(this);
  }

  render() {
    const { choices, levels } = this.props;

    return <form className='level-form center'>
    { Object.keys(choices).map((key, index) => {
        return <div className='choice-wrapper' key={index}>
          <img src={ choices[key].image } alt='' />
          <figcaption>{ choices[key].name }</figcaption>
          <div className='input-wrapper'>
            { _.times(levels, i => {
              return <label className={ this.state.levels[index] + 1 > i ? 'marked' : null } key={i}>
                <input type='radio' name={ key } value={ i } onClick={ this.handleClick(index, i) } />
              </label>;
            }) }
          </div>
        </div>
      }) }
    </form>;
  }
}

export default LevelForm;
