import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar'
import App from './components/App';

import { store } from './_helpers';
import { Provider } from 'react-redux';
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
//ReactDOM.render(<App/>, document.getElementById('app'));
//ReactDOM.render(<Categories/>, document.getElementById('categories'));
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'));
