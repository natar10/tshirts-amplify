import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
import { OrderList } from './OrdersList';
import { OrderView } from './OrderView';
import { UpdateProduct } from '../products/UpdateProduct';

export const createOrdersRoutes = () => {
  const routes = (
    <Route path="/owner/orders">
      <Route
        index
        element={
          <Auth>
            <OrderList />
          </Auth>
        }
      />
      <Route
        path="view/:id"
        element={
          <Auth>
            <OrderView />
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
    </Route>
  );
  return { routes };
};
