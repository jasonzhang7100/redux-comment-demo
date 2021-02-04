import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';

import store from './redux/store'
import './containers/app.css'
import App from './containers/App';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
