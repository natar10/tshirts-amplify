import React from 'react';
import { useParams } from 'react-router-dom';
import { updateProduct } from '@graphql/mutations';
import { CreateProductInput, GetProductQuery } from '@api-types';
import { Layout } from '@layout/Layout';
import { getProduct } from '@graphql/queries';
import { updateElement } from '@services/apiMutations';
import { useElement } from '@services/swrHooks';
import { DataContainer } from '@data-management/DataContainer';
import { ProductForm } from './ProductForm';

export const UpdateProduct: React.FC = () => {
  const params = useParams();
  const { data, isLoading, error, isValidating, mutate } =
    useElement<GetProductQuery>(getProduct, params.id);
  const productQuery = data?.getProduct ? data : null;

  const updateProd = (updateData: CreateProductInput) => {
    if (params.id) {
      const options = { rollbackOnError: true };
      mutate(updateElement(updateData, params.id, updateProduct), options);
    }
  };

  return (
    <Layout
      title="Update Product"
      breadCrumbs={[
        { text: 'Products', href: '/owner/products' },
        { text: productQuery?.getProduct?.name || '', href: '#' },
      ]}
    >
      <DataContainer
        isLoading={isLoading}
        isValidating={isValidating}
        errors={error}
      >
        {productQuery && (
          <ProductForm
            isLoading={isLoading || isValidating}
            onSubmit={(prodData) => updateProd(prodData)}
            title="Update Product"
            product={productQuery}
          />
        )}
      </DataContainer>
    </Layout>
  );
};
