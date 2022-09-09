import React from 'react';
import Form from '@cloudscape-design/components/form';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import { SelectField, TextField } from '@aws-amplify/ui-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  CreateOrderInput,
  GetOrderQuery,
  PaymentStatus,
  PaymentType,
  OrderStatus,
} from '@api-types';

type Props = {
  isLoading: boolean;
  onSubmit: (data: CreateOrderInput) => void;
  title: string;
  order?: GetOrderQuery;
};

export const OrderForm: React.FC<Props> = ({
  isLoading,
  onSubmit,
  title,
  order,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOrderInput>();
  const navigate = useNavigate();

  const makeOptions = (options: string[]) => (
    <>
      {options.map((option) => (
        <option key={option} value={option}>
          {option.toUpperCase()}
        </option>
      ))}
    </>
  );

  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="link" onClick={() => navigate('/owner/orders')}>
            Cancel
          </Button>
          <Button
            loading={isLoading}
            formAction="submit"
            onClick={() => handleSubmit(onSubmit)()}
            variant="primary"
          >
            {order ? 'Update' : 'Submit'}
          </Button>
        </SpaceBetween>
      }
      header={
        <Header
          variant="h1"
          description="Here you can update the state of the order"
        >
          {title}
        </Header>
      }
    >
      <Container>
        <SpaceBetween direction="vertical" size="l">
          <TextField
            label="Title"
            placeholder="T-shirt"
            {...register('title', { required: true })}
            hasError={errors.title && true}
            errorMessage="The order should have a title"
            defaultValue={order?.getOrder?.title}
          />
          <TextField
            label="Total"
            {...register('total', { required: true })}
            hasError={errors.total && true}
            errorMessage="Add a total"
            defaultValue={order?.getOrder?.total}
          />
          <SelectField
            {...register('status', { required: true })}
            label="Order Status"
            defaultValue={order?.getOrder?.status}
            hasError={errors.total && true}
            errorMessage="Add a order status"
          >
            {makeOptions(Object.values(OrderStatus))}
          </SelectField>
          <SelectField
            {...register('paymentStatus', { required: true })}
            label="Payment Status"
            defaultValue={order?.getOrder?.paymentStatus}
            hasError={errors.total && true}
            errorMessage="Add a payment status"
          >
            {makeOptions(Object.values(PaymentStatus))}
          </SelectField>
          <SelectField
            {...register('paymentType', { required: true })}
            label="Payment Type"
            defaultValue={order?.getOrder?.paymentType}
            hasError={errors.total && true}
            errorMessage="Add a payment type"
          >
            {makeOptions(Object.values(PaymentType))}
          </SelectField>
        </SpaceBetween>
      </Container>
    </Form>
  );
};

OrderForm.defaultProps = {
  order: undefined,
};
