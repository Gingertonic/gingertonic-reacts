import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/normalize.css';
import './styles/index.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);