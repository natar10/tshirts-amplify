import React from 'react';
import { Authenticator as Auth } from '@aws-amplify/ui-react';
import { Route } from 'react-router-dom';
import { DeliveryList } from './AddressList';
import { DeliveryView } from './AddressView';
import { UpdateDelivery } from './UpdateAddress';
import { CreateDelivery } from './CreateAddress';

export const createAddressRoutes = () => {
  const routes = (
    <Route path="/address">
      <Route
        index
        element={
          <Auth>
            <DeliveryList />
          </Auth>
        }
      />
      <Route
        path="view/:id"
        element={
          <Auth>
            <DeliveryView />
          </Auth>
        }
      />
      <Route
        path="update/:id"
        element={
          <Auth>
            <UpdateDelivery />
          </Auth>
        }
      />
      <Route
        path="create"
        element={
          <Auth>
            <CreateDelivery />
          </Auth>
        }
      />
    </Route>
  );
  return { routes };
};
