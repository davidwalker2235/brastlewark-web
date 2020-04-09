import 'typeface-roboto';
import React, {FC} from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './router/rootRouter';
import configureStore, { history } from './store/store';
import Loading from './components/loading/Loading';
import './App.css';

const App: FC<{}> = () => {
  const store = configureStore()
  return (
    <Provider store={store}>
      <Loading />
      <RootNavigator history={history}/>
    </Provider>
  );
}

export default App;
