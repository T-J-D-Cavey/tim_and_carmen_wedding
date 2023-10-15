import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './translation/i18n.ts';
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
)
