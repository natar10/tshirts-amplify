import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
import { ProductCatalog } from './ProductCatalog';
import { OrderCreation } from './OrderCreation';
import { CartSummary } from './CartSummary';
import { ClientOrders } from './ClientOrders';

export const createCartRoutes = () => {
  const routes = (
    <Route path="/">
      <Route index element={<ProductCatalog />} />
      <Route path="product/:id" element={<OrderCreation />} />
      <Route path="cart" element={<CartSummary />} />
      <Route
        path="orders"
        element={
          <Auth>
            <ClientOrders />
          </Auth>
        }
      />
    </Route>
  );
  return { routes };
};
