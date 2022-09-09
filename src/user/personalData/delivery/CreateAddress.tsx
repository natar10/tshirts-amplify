import React, { useState } from 'react';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@layout/Layout';

import { CreateDeliveryInput } from '@api-types';
import { createDelivery } from '@graphql/mutations';

import { addElement } from '@services/apiMutations';
import useAppStore from '@use-AppStore';
import { DeliveryForm } from './AddressForm';

export const CreateDelivery: React.FC = () => {
  const setToogleState = useAppStore((state) => state.setToogleState);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuthenticator((context) => [context.user]);

  const addDelivery = (data: CreateDeliveryInput) => {
    setLoading(true);
    addElement(
      { ...data, clientDeliveryAddressId: user.username },
      createDelivery
    )
      .then(() => {
        setToogleState();
        navigate('/address', { replace: true });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout
      title="Create Delivery Address"
      breadCrumbs={[
        { text: 'Delivery addresses', href: '/address' },
        { text: 'Create address', href: '#' },
      ]}
    >
      <DeliveryForm
        isLoading={isLoading}
        onSubmit={(data) => addDelivery(data)}
        title="Create a new Delivery"
      />
    </Layout>
  );
};
