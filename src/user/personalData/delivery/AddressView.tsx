import React from 'react';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import {
  Heading,
  Flex,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from '@aws-amplify/ui-react';
import { useParams, useNavigate } from 'react-router-dom';
import { GetDeliveryQuery } from '@api-types';
import { getDelivery } from '@graphql/queries';
import { Layout } from '@layout/Layout';
import { deleteDelivery } from '@graphql/mutations';
import { deleteElement } from '@services/apiMutations';
import { useElement } from '@services/swrHooks';
import { DataContainer } from '@data-management/DataContainer';

export const DeliveryView: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading, error, isValidating } = useElement<GetDeliveryQuery>(
    getDelivery,
    params.id
  );

  const deleteProd = () => {
    if (params.id) {
      deleteElement(params.id, deleteDelivery)
        .then(() => navigate('/address', { replace: true }))
        .catch((e) => console.log(e));
    }
  };
  return (
    <Layout
      title="Delivery Address Details:"
      topButtons={
        <Button loading={isLoading} onClick={deleteProd}>
          Delete
        </Button>
      }
      breadCrumbs={[
        { text: 'Delivery addresses', href: '/address' },
        { text: 'Address view', href: '#' },
      ]}
    >
      <DataContainer
        isLoading={isLoading}
        isValidating={isValidating}
        errors={error}
        header={<Header variant="h2">Order details:</Header>}
      >
        {data?.getDelivery && (
          <SpaceBetween direction="vertical" size="xxl">
            <Flex
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              alignContent="flex-start"
              wrap="nowrap"
              gap="1rem"
            >
              <Heading level={1}>
                {data.getDelivery.city} - {data.getDelivery.zip}
              </Heading>
            </Flex>
            <Flex
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
              alignContent="flex-start"
              wrap="nowrap"
              gap="1rem"
            >
              <Table highlightOnHover>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <strong>City</strong>
                    </TableCell>
                    <TableCell>{data.getDelivery.city}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Country</strong>
                    </TableCell>
                    <TableCell>{data.getDelivery.country}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>State</strong>
                    </TableCell>
                    <TableCell>{data.getDelivery.state}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Zipcode</strong>
                    </TableCell>
                    <TableCell>{data.getDelivery.zip}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Phone</strong>
                    </TableCell>
                    <TableCell>{data.getDelivery.phone}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Description</strong>
                    </TableCell>
                    <TableCell>{data.getDelivery.details}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Flex>
          </SpaceBetween>
        )}
      </DataContainer>
    </Layout>
  );
};
