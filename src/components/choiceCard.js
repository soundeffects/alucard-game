import React from 'react';

function ChoiceCard(title, imgUrl, alt, group) {
  return <label>
    <h3>{ title }</h3>
    <img src={ imgUrl } alt={ alt } />
    <input type='radio' name={ group } value={ title.toLowerCase() } />
  </label>;
}

export default ChoiceCard;