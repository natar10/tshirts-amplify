import * as React from 'react';
import {
  Box,
  Button,
  Container,
  Flashbar,
  Header,
} from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@aws-amplify/ui-react';

export const ErrorFallback = () => {
  const navigate = useNavigate();
  return (
    <Container
      header={
        <Header variant="h2" description="💥 CABOOM 💥">
          Woops! There was an error
        </Header>
      }
    >
      <Divider marginTop={20} marginBottom={20} />
      <Flashbar
        items={[
          {
            type: 'error',
            dismissible: false,
            content: <>💥 CABOOM 💥 There was an error.</>,
          },
        ]}
      />
      <Box textAlign="center">
        <h2>Please go back to home and retry the operation</h2>
      </Box>
      <Box textAlign="center">
        <Button onClick={() => navigate('/')} iconName="refresh">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};
