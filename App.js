import React from 'react';
import { StatusBar } from 'react-native';
import { UserProvider } from './src/context/user';
import Home from './src/pages/Home';

function App() {
  return (
    <UserProvider>
      <StatusBar barStyle="light-content" />
      <Home />
    </UserProvider>
  );
}

export default App;
