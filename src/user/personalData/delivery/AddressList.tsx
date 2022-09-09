import React from 'react';
import {
  Box,
  Button,
  Container,
  Header,
  SpaceBetween,
  Table,
} from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';
import { ListDeliveriesQuery } from '@api-types';
import { listDeliveries } from '@graphql/queries';
import { Layout } from '@layout/Layout';
import { useElements } from '@services/swrHooks';

export const DeliveryList: React.FC = () => {
  const navigate = useNavigate();

  const { data, isLoading, isValidating } =
    useElements<ListDeliveriesQuery>(listDeliveries);
  const items = data?.listDeliveries?.items ? data.listDeliveries.items : [];

  return (
    <Layout
      title="Delivery Address Lists:"
      topButtons={
        <Button variant="primary" onClick={() => navigate('/address/create')}>
          Create New Delivery Address
        </Button>
      }
    >
      <Container>
        <SpaceBetween direction="vertical" size="l">
          <Table
            columnDefinitions={[
              {
                id: 'address',
                header: 'Address',
                cell: (e) => `${e?.city}, ${e?.address}`,
              },
              {
                id: 'country',
                header: 'Country',
                cell: (e) => e?.country,
              },
              {
                id: 'details',
                header: 'Details',
                cell: (e) => e?.details,
              },
              {
                id: 'zip',
                header: 'Zipcode',
                cell: (e) => e?.zip,
              },
              {
                id: 'view',
                header: 'View',
                cell: (e) => (
                  <Button
                    variant="link"
                    onClick={() => navigate(`/address/view/${e?.id}`)}
                  >
                    View
                  </Button>
                ),
              },
              {
                id: 'update',
                header: 'Update',
                cell: (e) => (
                  <Button
                    variant="link"
                    onClick={() => navigate(`/address/update/${e?.id}`)}
                  >
                    Update
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
        </SpaceBetween>
      </Container>
    </Layout>
  );
};
