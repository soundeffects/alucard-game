import React from 'react';

function Button(label, onClick, disabled=false) {
  if (!disabled) {
    return <button key={label} onClick={onClick}>
      { label }
    </button>;
  } else {
    return <button key={label} className="disabled">
      { label }
    </button>;
  }
}

export default Button;
