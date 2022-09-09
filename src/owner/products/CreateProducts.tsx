import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Layout } from '@layout/Layout';

import { CreateProductInput } from '@api-types';
import { createProduct } from '@graphql/mutations';

import { addElement } from '@services/apiMutations';
import { ErrorNotification } from '@data-management/ErrorNotification';
import { ProductForm } from './ProductForm';

export const CreateProduct: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const addProduct = (data: CreateProductInput) => {
    setLoading(true);
    addElement({ ...data, images: [data.thumbnail] }, createProduct)
      .then(() => navigate('/owner/products/', { replace: true }))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  };

  return (
    <Layout
      title="Create a new Product"
      breadCrumbs={[{ text: 'Products', href: '/owner/products' }]}
    >
      <>
        {error && <ErrorNotification errors={[error]} />}
        <ProductForm
          isLoading={isLoading}
          onSubmit={(data) => addProduct(data)}
          title="Create a new Product"
        />
      </>
    </Layout>
  );
};
