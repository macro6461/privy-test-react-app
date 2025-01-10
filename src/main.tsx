import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import {PrivyProvider} from '@privy-io/react-auth';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrivyProvider
      appId="your-privy-app-id"
      config={{
        // Display email and wallet as login methods
        loginMethods: ['email', 'wallet'],
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://your-logo-url',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>,
);