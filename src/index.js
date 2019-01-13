import React from 'react';
import ReactDOM from 'react-dom';
import App from './structure/App';
import config from './Config';
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));