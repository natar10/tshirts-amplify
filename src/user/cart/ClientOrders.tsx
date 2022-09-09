import React, { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Header,
  SpaceBetween,
  Table,
} from '@cloudscape-design/components';
import { getElement } from '@services/apiMutations';

import { Layout } from '@layout/Layout';
import { getClient } from '@graphql/queries';
import { GetClientQuery } from '@api-types';
import awsExports from '@aws-exports';

Amplify.configure(awsExports);

export const ClientOrders: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();
  const [client, setClient] = useState<GetClientQuery | null>(null);

  useEffect(() => {
    if (user.username) {
      getElement(user.username, getClient)
        .then((response) => {
          response.data?.getClient
            ? setClient(response.data)
            : navigate('/profile/create', { replace: true });
        })
        .catch((e) => console.log(e));
    }
  }, []);

  const formatDate = (date?: string) => {
    if (date) {
      const isoDate = new Date(date);
      return isoDate.toDateString();
    }
    return '';
  };

  return (
    <Layout title="Orders history:">
      <Container>
        <Table
          columnDefinitions={[
            {
              id: 'id',
              header: 'ID',
              cell: (e) => (
                <p
                  style={{
                    width: 100,
                    whiteSpace: 'break-spaces',
                  }}
                >
                  {e?.id}
                </p>
              ),
            },
            {
              id: 'date',
              header: 'Date',
              cell: (e) => <p>{formatDate(e?.createdAt)}</p>,
            },
            {
              id: 'status',
              header: 'Status',
              cell: (e) => <p>{e?.status.toUpperCase()}</p>,
            },
            {
              id: 'paymentStatus',
              header: 'Payment Status',
              cell: (e) => e?.paymentStatus.toUpperCase(),
            },
            {
              id: 'paymentType',
              header: 'Payment Type',
              cell: (e) => e?.paymentType.toUpperCase(),
            },
            {
              id: 'total',
              header: 'Total',
              cell: (e) => e?.paymentType.toUpperCase(),
            },
          ]}
          items={
            client?.getClient?.orders?.items
              ? client.getClient.orders.items
              : []
          }
          loadingText="Loading resources"
          trackBy="id"
          variant="stacked"
          empty={
            <Box textAlign="center" color="inherit">
              <SpaceBetween direction="vertical" size="l">
                <b>No items in cart</b>
                <Button onClick={() => navigate('/')}>Browse here</Button>
              </SpaceBetween>
            </Box>
          }
          header={<Header>Orders History</Header>}
        />
      </Container>
    </Layout>
  );
};
