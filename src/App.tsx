import React from 'react';
import './App.css';
import { ProvideAuth } from './hooks/useAuth';
import Entry from "./Entry"
import { ErrorProvider } from './hooks/useError';

let App:React.FC = ()=> {
  return (
    <ProvideAuth>
      <ErrorProvider>
        <Entry />
      </ErrorProvider>
    </ProvideAuth>
  );
}

export default App;
