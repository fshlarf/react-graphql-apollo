import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { ApolloProvider } from 'react-apollo'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import client from './apollo'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) module.hot.accept()

// The module.hot.accept() isn’t really necessary, 
// but makes it so that just the components changing within the app will refresh as you update them, 
// rather than refreshing the entire page. Every once in a while you may need to refresh just to reset the state of the app, 
// but generally, this leads to a quicker turnaround time.
