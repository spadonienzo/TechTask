import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import store from './redux/store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app-container'>
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
document.getElementById('root')
);
