import React from 'react';
import './App.css';
import { ProvideAuth } from './hooks/useAuth';
import Entry from "./Entry"
import { ErrorProvider } from './hooks/useError';
import { WindowsProvider } from './hooks/useWindows';

let App:React.FC = ()=> {
  return (
    <ProvideAuth>
      <ErrorProvider>
        <WindowsProvider>
          <Entry />
        </WindowsProvider>
      </ErrorProvider>
    </ProvideAuth>
  );
}

export default App;
