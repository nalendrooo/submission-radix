import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './states';
import './assets/css/style.css';
import router from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>,
);
