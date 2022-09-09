import React from 'react';
import { useSWRConfig } from 'swr';
import { updateOrder } from '@graphql/mutations';
import { CreateOrderInput, GetOrderQuery } from '@api-types';
import { updateElement } from '@services/apiMutations';
import { getOrder } from '@graphql/queries';
import { OrderForm } from './OrderForm';

type Props = {
  data: GetOrderQuery;
  isLoading: boolean;
};

export const UpdateOrder: React.FC<Props> = ({ data, isLoading }) => {
  const { mutate } = useSWRConfig();

  const updateProd = (updateData: CreateOrderInput) => {
    if (data.getOrder?.id) {
      const options = {
        optimisticData: updateData,
        rollbackOnError: true,
      };
      mutate(
        [data.getOrder.id, getOrder],
        updateElement(updateData, data.getOrder.id, updateOrder),
        options
      );
    }
  };

  return (
    <OrderForm
      isLoading={isLoading}
      onSubmit={(updateData) => updateProd(updateData)}
      title="Update Order"
      order={data}
    />
  );
};
