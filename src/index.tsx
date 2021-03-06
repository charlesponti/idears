import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import appStore from 'src/reducers/AppReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';
// Import styles
import './styles/tailwind.generated.css';
import history from './utils/history';

const { REACT_APP_AUTH0_CLIENT_ID, REACT_APP_AUTH0_DOMAIN } = process.env;

const store = createStore(appStore as any);

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={REACT_APP_AUTH0_DOMAIN as string}
      clientId={REACT_APP_AUTH0_CLIENT_ID as string}
      onRedirectCallback={onRedirectCallback}
      redirectUri={window.location.origin}
    >
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
