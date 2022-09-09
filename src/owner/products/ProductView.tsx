import React from 'react';
import { Button, Header, SpaceBetween } from '@cloudscape-design/components';
import {
  Heading,
  Flex,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from '@aws-amplify/ui-react';
import { useParams, useNavigate } from 'react-router-dom';
import { GetProductQuery } from '@api-types';
import { getProduct } from '@graphql/queries';
import { Layout } from '@layout/Layout';
import { deleteProduct } from '@graphql/mutations';
import { deleteElement } from '@services/apiMutations';
import { useElement } from '@services/swrHooks';
import { DataContainer } from '@data-management/DataContainer';
import { ProductOptionsList } from './ProductOptions';

export const ProductView: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading, error, isValidating } = useElement<GetProductQuery>(
    getProduct,
    params.id
  );
  const product = data?.getProduct ? data?.getProduct : null;
  const deleteProd = () => {
    if (params.id) {
      deleteElement(params.id, deleteProduct)
        .then(() => navigate('/owner/products/', { replace: true }))
        .catch((e) => console.log(e));
    }
  };
  return (
    <Layout
      title="Product Details"
      breadCrumbs={[
        { text: 'Products', href: '/owner/products' },
        { text: product?.name || '', href: '#' },
      ]}
      topButtons={
        <Button loading={isLoading} onClick={deleteProd}>
          Delete
        </Button>
      }
    >
      <DataContainer
        isLoading={isLoading}
        isValidating={isValidating}
        errors={error}
        header={<Header variant="h2">Order details:</Header>}
      >
        {product && (
          <SpaceBetween direction="vertical" size="xxl">
            <Flex
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              alignContent="flex-start"
              wrap="nowrap"
              gap="1rem"
            >
              <Heading level={1}>{product.name}</Heading>
            </Flex>
            <Flex
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              alignContent="flex-start"
              wrap="nowrap"
              gap="1rem"
            >
              <img width="40%" src={product.thumbnail} alt={product.name} />

              <Table highlightOnHover>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <strong>Price</strong>
                    </TableCell>
                    <TableCell>{product.price}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Available</strong>
                    </TableCell>
                    <TableCell>{product.avilable ? 'Yes' : 'No'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Description</strong>
                    </TableCell>
                    <TableCell>{product.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Unlimited</strong>
                    </TableCell>
                    <TableCell>{product.unlimited ? 'Yes' : 'No'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Options</strong>
                    </TableCell>
                    <TableCell>
                      {product.options ? (
                        <ProductOptionsList options={product.options} />
                      ) : (
                        'No options yet'
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Flex>
          </SpaceBetween>
        )}
      </DataContainer>
    </Layout>
  );
};
