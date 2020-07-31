import React from 'react';
import './App.css';
import UsuariosListado from './components/UsuariosListado';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <UsuariosListado></UsuariosListado>
    </Provider>
  );
}

export default App;
