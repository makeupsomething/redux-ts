import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div>Search for a package</div>
      <RepositoriesList />
    </Provider>
  );
};

export default App;
