import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store.js';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <PersistGate persistor ={persistor} loading={null}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>

)
