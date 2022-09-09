import React from 'react';
import { CartProvider } from 'react-use-cart';
import { Amplify } from 'aws-amplify';
import { Authenticator as Auth, View } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes } from 'react-router-dom';
import awsExports from '@aws-exports';
import { InitialState } from './DataManagement/InitialState';
import '@cloudscape-design/global-styles/index.css';
import '@aws-amplify/ui-react/styles.css';
import { AppRoutes } from './Routes';

Amplify.configure(awsExports);

function App() {
  return (
    <React.StrictMode>
      <Auth.Provider>
        <CartProvider>
          <InitialState>
            <View>
              <BrowserRouter>
                <Routes>{AppRoutes()}</Routes>
              </BrowserRouter>
            </View>
          </InitialState>
        </CartProvider>
      </Auth.Provider>
    </React.StrictMode>
  );
}

export default App;
