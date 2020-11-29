import React from 'react';

import { ToastProvider } from './useToast';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>{children}</ToastProvider>
);

export default AppProvider;
