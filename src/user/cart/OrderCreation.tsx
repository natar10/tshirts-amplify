import React from 'react';
import { Heading, Flex } from '@aws-amplify/ui-react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Header,
  SpaceBetween,
  Table,
} from '@cloudscape-design/components';
import { Layout } from '@layout/Layout';
import { getProduct } from '@graphql/queries';
import { GetProductQuery, Product } from '@api-types';
import useAppStore from '@use-AppStore';
import { usePublicElement } from '@services/swrHooks';
import { DataContainer } from '@data-management/DataContainer';
import { ProductOptionsList } from './ProductOptions';

export const OrderCreation: React.FC = () => {
  const cognitoUser = useAppStore((state) => state.cognitoUser);
  const userAuth = cognitoUser !== undefined;
  const params = useParams();

  const { data, isLoading, error, isValidating } =
    usePublicElement<GetProductQuery>(getProduct, userAuth, params.id);

  return (
    <Layout
      title="Customize and add to cart"
      breadCrumbs={[
        { text: 'Catalog', href: '/' },
        { text: data?.getProduct?.name || '', href: '#' },
      ]}
    >
      <Container>
        {data?.getProduct && (
          <DataContainer
            isLoading={isLoading}
            isValidating={isValidating}
            errors={error}
          >
            <Heading level={1}>{data.getProduct.name}</Heading>
            <Flex
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              alignContent="flex-start"
              wrap="nowrap"
              gap="1rem"
            >
              <img
                width="40%"
                src={data.getProduct.thumbnail}
                alt={data.getProduct.name}
              />

              <SpaceBetween direction="vertical" size="xxl">
                <Box>
                  {data.getProduct.options && data.getProduct ? (
                    <ProductOptionsList
                      product={data.getProduct as Product}
                      options={data.getProduct.options}
                    />
                  ) : (
                    'No options yet'
                  )}
                </Box>
                <Table
                  columnDefinitions={[
                    {
                      id: 'price',
                      header: 'Price',
                      width: 20,
                      cell: (e) => <Heading level={1}>{`$${e.price}`}</Heading>,
                    },
                    {
                      id: 'description',
                      header: 'Description',
                      width: 20,
                      cell: (e) => e.description,
                    },
                  ]}
                  items={[
                    {
                      id: data.getProduct.id,
                      price: data.getProduct.price,
                      description: data.getProduct.description,
                    },
                  ]}
                  loadingText="Loading details"
                  trackBy="id"
                  empty={
                    <Box textAlign="center" color="inherit">
                      <b>Item not found</b>
                    </Box>
                  }
                  header={<Header>Product Details</Header>}
                />
              </SpaceBetween>
            </Flex>
          </DataContainer>
        )}
      </Container>
    </Layout>
  );
};
