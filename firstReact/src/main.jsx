import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from './conponents/ErrorMessage.jsx';
import { UserProvider } from './context/UserContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <UserProvider>
        <App></App>
      </UserProvider>
    </ErrorBoundary>
  </>
);
