import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './core/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
