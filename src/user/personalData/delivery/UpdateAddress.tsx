import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateDelivery } from '@graphql/mutations';
import { CreateDeliveryInput, GetDeliveryQuery } from '@api-types';
import { Layout } from '@layout/Layout';
import { getDelivery } from '@graphql/queries';
import { updateElement } from '@services/apiMutations';
import { useElement } from '@services/swrHooks';
import { DataContainer } from '@data-management/DataContainer';
import { DeliveryForm } from './AddressForm';

export const UpdateDelivery: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading, error, isValidating, mutate } =
    useElement<GetDeliveryQuery>(getDelivery, params.id);

  const updateAddress = (updateData: CreateDeliveryInput) => {
    if (params.id) {
      const options = { rollbackOnError: true };
      mutate(updateElement(updateData, params.id, updateDelivery), options);
      navigate('/address', { replace: true });
    }
  };

  return (
    <Layout
      title="Update Delivery Address"
      breadCrumbs={[
        { text: 'Delivery addresses', href: '/address' },
        { text: 'Update view', href: '#' },
      ]}
    >
      <DataContainer
        isLoading={isLoading}
        isValidating={isValidating}
        errors={error}
      >
        {data && (
          <DeliveryForm
            isLoading={isLoading}
            onSubmit={(addressData) => updateAddress(addressData)}
            title="Fill the form to update the address:"
            product={data}
          />
        )}
      </DataContainer>
    </Layout>
  );
};
