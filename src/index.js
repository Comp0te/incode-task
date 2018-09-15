import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/semantic-ui-css/semantic.min.css';
import './simple-reset.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
