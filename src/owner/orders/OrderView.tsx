import React from 'react';
import {
  Header,
  SpaceBetween,
  Button,
  ColumnLayout,
} from '@cloudscape-design/components';
import { Text, Heading, Divider } from '@aws-amplify/ui-react';
import { useParams, useNavigate } from 'react-router-dom';
import { GetOrderQuery } from '@api-types';
import { getOrder } from '@graphql/queries';
import { Layout } from '@layout/Layout';
import { deleteOrder } from '@graphql/mutations';
import { deleteElement } from '@services/apiMutations';
import { useElement } from '@services/swrHooks';
import { DataContainer } from '@data-management/DataContainer';
import { UpdateOrder } from './OrderUpdate';

export const OrderView: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading, error, isValidating } = useElement<GetOrderQuery>(
    getOrder,
    params.id
  );

  const removeOrder = () => {
    if (params.id) {
      deleteElement(params.id, deleteOrder)
        .then(() => navigate('/owner/orders/', { replace: true }))
        .catch((e) => console.log(e));
    }
  };

  return (
    <Layout
      title="Client's Order"
      topButtons={
        <Button loading={isLoading} onClick={removeOrder}>
          Delete
        </Button>
      }
      breadCrumbs={[
        { text: 'Orders', href: '/owner/orders' },
        { text: 'Order view', href: '#' },
      ]}
    >
      <DataContainer
        isLoading={isLoading}
        isValidating={isValidating}
        errors={error}
        header={<Header variant="h2">Order details:</Header>}
      >
        {data?.getOrder && (
          <>
            <Heading level={1}>{data.getOrder.title}</Heading>
            <Divider marginTop={20} marginBottom={20} />
            <SpaceBetween direction="vertical" size="l">
              <ColumnLayout columns={2}>
                <Text>
                  <strong>Total:</strong> {data.getOrder.total}
                </Text>
                <Text>
                  <strong>Status:</strong> {data.getOrder.status.toUpperCase()}
                </Text>
                <Text>
                  <strong>Payment Status:</strong>{' '}
                  {data.getOrder.paymentStatus.toUpperCase()}
                </Text>
                <Text>
                  <strong>Payment Type:</strong>{' '}
                  {data.getOrder.paymentType.toUpperCase()}
                </Text>
              </ColumnLayout>
            </SpaceBetween>
            <Divider marginTop={20} marginBottom={20} />
            <UpdateOrder data={data} isLoading={isLoading} />
          </>
        )}
      </DataContainer>
    </Layout>
  );
};
