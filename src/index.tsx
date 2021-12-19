import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import store from './store/store';


const App = lazy(() =>
  Promise.all([
    import('./App'),
    new Promise(resolve => setTimeout(resolve, 1200))
  ]).then(([moduleExports]) => moduleExports));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<h1>Cargandoooooo...</h1>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
