import React from 'react';
import {
  Box,
  Button,
  Header,
  Icon,
  SpaceBetween,
  Table,
} from '@cloudscape-design/components';
import { Divider, Heading, StepperField } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
import awsExports from '@aws-exports';

Amplify.configure(awsExports);

type Props = {
  showEmpty?: boolean;
};

export const CartItems: React.FC<Props> = ({ showEmpty }) => {
  const navigate = useNavigate();
  const { emptyCart, items, cartTotal, removeItem, updateItemQuantity } =
    useCart();

  const setQuantity = (id: string, quantity: number) => {
    updateItemQuantity(id, quantity);
  };

  return (
    <>
      <Table
        columnDefinitions={[
          {
            id: 'item',
            header: 'Item',
            cell: (e) => (
              <div>
                <img width={40} src={e.productThumbnail} alt={e.productName} />{' '}
                {e.productName}-{e.productColor}
              </div>
            ),
          },
          {
            id: 'quantity',
            header: 'Quant.',
            width: 200,
            cell: (e) => (
              <StepperField
                max={10}
                min={1}
                step={1}
                label=""
                defaultValue={e.quantity}
                onStepChange={(quantity: number) => setQuantity(e.id, quantity)}
              />
            ),
          },
          {
            id: 'Price',
            header: 'Price',
            width: 20,
            cell: (e) => e.price,
          },
          {
            id: 'subtotal',
            header: '$',
            width: 20,
            cell: (e) => `$${e.itemTotal}`,
          },
          {
            id: 'remove',
            header: <Icon name="status-negative" variant="warning" />,
            width: 20,
            cell: (e) => (
              <Button
                iconName="status-negative"
                variant="icon"
                onClick={() => removeItem(e.id)}
              />
            ),
          },
        ]}
        items={items}
        loadingText="Loading resources"
        trackBy="id"
        empty={
          <Box textAlign="center" color="inherit">
            <SpaceBetween direction="vertical" size="l">
              <b>No items in cart</b>
              <Button onClick={() => navigate('/')}>Browse here</Button>
            </SpaceBetween>
          </Box>
        }
        header={<Header>Items in Cart</Header>}
      />
      <Divider marginTop={20} marginBottom={25} orientation="horizontal" />
      <SpaceBetween direction="horizontal" size="l">
        <Heading level={4}>Cart Total:</Heading>
        <Heading level={3}>${cartTotal}</Heading>
      </SpaceBetween>
      {showEmpty && (
        <>
          <Divider marginTop={20} marginBottom={20} orientation="horizontal" />
          <Button variant="normal" onClick={emptyCart}>
            Empty Cart
          </Button>
        </>
      )}
    </>
  );
};

CartItems.defaultProps = {
  showEmpty: true,
};
