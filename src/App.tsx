import React from 'react';
import Dashboard from './pages/Dashboard';

import GlobalStyle from './styles/global';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Dashboard />
      <GlobalStyle />
    </AppProvider>
  );
};

export default App;
