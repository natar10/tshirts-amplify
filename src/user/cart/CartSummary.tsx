import React, { useState } from 'react';
import { Form, SpaceBetween } from '@cloudscape-design/components';
import { Authenticator, SelectField } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

import Button from '@cloudscape-design/components/button';

import { useCart } from 'react-use-cart';
import { useForm } from 'react-hook-form';
import {
  CreateOrderInput,
  OrderStatus,
  PaymentStatus,
  PaymentType,
} from '@api-types';
import { createOrder } from '@graphql/mutations';
import { addElement } from '@services/apiMutations';

import { Layout } from '@layout/Layout';
import useAppStore from '@use-AppStore';
import awsExports from '@aws-exports';
import { CartItems } from '@cart-layout/CartItems';

Amplify.configure(awsExports);

type OrderDetails = {
  delivery_id: string;
};

export const CartSummary: React.FC = () => {
  const userProfile = useAppStore((state) => state.userProfile);
  const cognitoUser = useAppStore((state) => state.cognitoUser);
  const navigate = useNavigate();
  const { emptyCart, items, cartTotal } = useCart();
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderDetails>();

  const addOrder = (data: OrderDetails) => {
    const order: CreateOrderInput = {
      title: 'string',
      date: new Date().toISOString(),
      total: cartTotal,
      orderDetails: items.map((item) => ({
        productID: item.productID,
        productName: item.productName,
        productColor: item.productColor,
        productThumbnail: item.productThumbnail,
        quantity: item.quantity!,
        total: item.itemTotal!,
      })),
      status: OrderStatus.received,
      paymentStatus: PaymentStatus.procesing,
      paymentType: PaymentType.bankWire,
      clientOrdersId: cognitoUser?.getUsername(),
      orderDeliveryId: data.delivery_id,
    };
    setLoading(true);
    addElement(order, createOrder)
      .then(() => {
        emptyCart();
        navigate('/', { replace: true });
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  return (
    <Layout
      title="Cart Summary"
      topButtons={<Button onClick={emptyCart}>Empty Cart</Button>}
      breadCrumbs={[
        { text: 'Catalog', href: '/' },
        { text: 'Cart Summary', href: '#' },
      ]}
    >
      <>
        <CartItems showEmpty={false} />
        {!userProfile && (
          <p>
            Please sing in or sing up and fill your profile data to create the
            order
          </p>
        )}
        <Authenticator>
          {!userProfile ? (
            <Button
              onClick={() => navigate('/profile/create')}
              iconName="user-profile"
            >
              Fill you profile data here
            </Button>
          ) : (
            <Form
              actions={
                <SpaceBetween direction="horizontal" size="xs">
                  <Button variant="link" onClick={() => navigate('/')}>
                    Cancel
                  </Button>
                  <Button
                    loading={isLoading}
                    formAction="submit"
                    onClick={() => handleSubmit(addOrder)()}
                    variant="primary"
                  >
                    Create Order
                  </Button>
                </SpaceBetween>
              }
            >
              {userProfile.deliveryAddress?.items.length === 0 && (
                <>
                  <p>Please add a delivery address</p>
                  <Button onClick={() => navigate('/address/create')}>
                    Add delivery address
                  </Button>
                </>
              )}
              <SelectField
                {...register('delivery_id', { required: true })}
                label="Delivery Address"
                hasError={errors.delivery_id && true}
                errorMessage="Add a delivery address"
              >
                {userProfile.deliveryAddress?.items.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.city} -{item?.zip} - {item?.details}
                  </option>
                ))}
              </SelectField>
            </Form>
          )}
        </Authenticator>
      </>
    </Layout>
  );
};
