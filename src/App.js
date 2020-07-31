import React from 'react';
import './App.css';
import UserList from './components/UserList';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserList></UserList>
      </div>
    </Provider>
  );
}

export default App;
