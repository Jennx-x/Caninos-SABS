import React from 'react';
import AppRouter from './router/AppRouter';
import {NavigationBar} from './shared/componentes/NavigationBar';

function App() {
  return <>
  <NavigationBar/>
   <AppRouter/>
  </>
}

export default App;