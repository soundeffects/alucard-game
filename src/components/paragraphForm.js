import React, { Component } from 'react';

class ParagraphForm extends Component {
  render() {
    const { choices } = this.props;

    return <form className='paragraph-form center'>
    { Object.keys(choices).map((key, index) => {
      return <div key={index}>
        <textarea placeholder={choices[key].name} />
      </div>;
      }) }
    </form>;
  }
}

export default ParagraphForm;
