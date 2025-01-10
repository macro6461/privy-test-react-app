import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import {PrivyProvider} from '@privy-io/react-auth';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID}
      config={{
        embeddedWallets: {
          createOnLogin: "all-users",
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>,
);