import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {
  Container,
  Header,
  SpaceBetween,
  Button,
  AppLayout,
} from '@awsui/components-react';
import { useAuthenticator } from '@aws-amplify/ui-react';

import { Authenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function App() {
  const { signOut } = useAuthenticator((context) => [context.user]);

  return (
    <AppLayout
      content={
        <Container header={<Header variant="h2">T-shirts App</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <h1>You are logged in!</h1>
            <Button onClick={signOut} variant="primary">
              Sign Out
            </Button>
          </SpaceBetween>
        </Container>
      }
    />
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <Authenticator>
        <App />
      </Authenticator>
    </Authenticator.Provider>
  </React.StrictMode>
);
