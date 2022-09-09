import React from 'react';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import { Divider, Heading } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Box, Header, Table } from '@cloudscape-design/components';
import { listOrders } from '@graphql/queries';
import { Layout } from '@layout/Layout';
import { useElements } from '@services/swrHooks';
import { ListOrdersQuery } from '@api-types';
import { ErrorNotification } from '@data-management/ErrorNotification';

export const OrderList: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, isValidating } =
    useElements<ListOrdersQuery>(listOrders);
  const items = data?.listOrders?.items ? data.listOrders.items : [];

  return (
    <Layout title="Orders lists">
      <Container>
        <Heading level={1}>Order List</Heading>
        <Divider marginTop={20} marginBottom={20} />
        {error && <ErrorNotification errors={error} />}
        <Table
          columnDefinitions={[
            {
              id: 'date',
              header: 'Date',
              cell: (e) => e?.createdAt,
            },
            {
              id: 'status',
              header: 'Status',
              cell: (e) => e?.status.toUpperCase(),
            },
            {
              id: 'paymentStatus',
              header: 'Payment Status',
              cell: (e) => e?.paymentStatus.toUpperCase(),
            },
            {
              id: 'total',
              header: 'Total',
              cell: (e) => `$${e?.total}`,
            },
            {
              id: 'view',
              header: 'View',
              cell: (e) => (
                <Button
                  variant="link"
                  onClick={() => navigate(`/owner/orders/view/${e?.id}`)}
                >
                  View
                </Button>
              ),
            },
          ]}
          items={items}
          loading={isLoading || isValidating}
          loadingText="Loading resources"
          trackBy="id"
          empty={
            <Box textAlign="center" color="inherit">
              <SpaceBetween direction="vertical" size="l">
                <b>No items in cart</b>
                <Button onClick={() => navigate('/')}>Browse here</Button>
              </SpaceBetween>
            </Box>
          }
          header={<Header>Items in Cart</Header>}
        />
      </Container>
    </Layout>
  );
};
