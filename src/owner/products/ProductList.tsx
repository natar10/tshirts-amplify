import React from 'react';
import { Divider, Heading } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Header,
  SpaceBetween,
  Table,
} from '@cloudscape-design/components';
import { ListProductsQuery } from '@api-types';
import { listProducts } from '@graphql/queries';
import { Layout } from '@layout/Layout';
import { useElements } from '@services/swrHooks';
import { ErrorNotification } from '@data-management/ErrorNotification';

export const ProductList: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, isValidating } =
    useElements<ListProductsQuery>(listProducts);
  const items = data?.listProducts?.items ? data.listProducts.items : [];

  return (
    <Layout
      title="Products Lists"
      topButtons={
        <Button
          variant="primary"
          onClick={() => navigate('/owner/products/create')}
        >
          Create New Product
        </Button>
      }
    >
      <Container>
        <Heading level={1}>Product List</Heading>
        <Divider marginTop={20} marginBottom={20} />
        {error && <ErrorNotification errors={error} />}
        <Table
          columnDefinitions={[
            {
              id: 'name',
              header: 'Name',
              cell: (e) => e?.name,
            },
            {
              id: 'price',
              header: 'Price',
              cell: (e) => `$${e?.price}`,
            },
            {
              id: 'description',
              header: 'Description',
              cell: (e) => e?.description,
            },
            {
              id: 'thumbnail',
              header: 'Thumbnail',
              cell: (e) => <img width={50} src={e?.thumbnail} alt={e?.name} />,
            },
            {
              id: 'view',
              header: 'View',
              cell: (e) => (
                <Button
                  variant="link"
                  onClick={() => navigate(`/owner/products/view/${e?.id}`)}
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
                  onClick={() => navigate(`/owner/products/update/${e?.id}`)}
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
      </Container>
    </Layout>
  );
};
