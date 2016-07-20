import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer component={require('./components/App').default} />,
      rootEl
    );
  });
}
