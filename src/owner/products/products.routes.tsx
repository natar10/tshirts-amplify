import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
import { ProductList } from './ProductList';
import { ProductView } from './ProductView';
import { UpdateProduct } from './UpdateProduct';
import { CreateProduct } from './CreateProducts';

export const createProductsRoutes = () => {
  const routes = (
    <Route path="/owner/products">
      <Route
        index
        element={
          <Auth>
            <ProductList />
          </Auth>
        }
      />
      <Route
        path="view/:id"
        element={
          <Auth>
            <ProductView />
          </Auth>
        }
      />
      <Route
        path="update/:id"
        element={
          <Auth>
            <UpdateProduct />
          </Auth>
        }
      />
      <Route
        path="create"
        element={
          <Auth>
            <CreateProduct />
          </Auth>
        }
      />
    </Route>
  );
  return { routes };
};
