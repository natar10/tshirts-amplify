import React from 'react';
import {
  Form,
  Container,
  Header,
  SpaceBetween,
  Button,
} from '@cloudscape-design/components';
import { TextField } from '@aws-amplify/ui-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CreateDeliveryInput, GetDeliveryQuery } from '@api-types';

type Props = {
  isLoading: boolean;
  onSubmit: (data: CreateDeliveryInput) => void;
  title: string;
  product?: GetDeliveryQuery;
};

export const DeliveryForm: React.FC<Props> = ({
  isLoading,
  onSubmit,
  title,
  product,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDeliveryInput>();
  const navigate = useNavigate();

  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="link" onClick={() => navigate('/address')}>
            Cancel
          </Button>
          <Button
            loading={isLoading}
            formAction="submit"
            onClick={() => handleSubmit(onSubmit)()}
            variant="primary"
          >
            {product ? 'Update' : 'Submit'}
          </Button>
        </SpaceBetween>
      }
    >
      <Container header={<Header variant="h2">{title}</Header>}>
        <SpaceBetween direction="vertical" size="l">
          <TextField
            label="City"
            placeholder="Miami"
            {...register('city', { required: true })}
            hasError={errors.city && true}
            errorMessage="Delivery have a city"
            defaultValue={product?.getDelivery?.city}
          />
          <TextField
            label="Country"
            placeholder="USA"
            {...register('country', { required: true })}
            hasError={errors.country && true}
            errorMessage="Add a country"
            defaultValue={product?.getDelivery?.country}
          />
          <TextField
            label="State"
            placeholder="Florida"
            {...register('state', { required: true })}
            hasError={errors.state && true}
            errorMessage="Add the state"
            defaultValue={product?.getDelivery?.state}
          />
          <TextField
            label="Address"
            placeholder="Street N213"
            {...register('address', { required: true })}
            hasError={errors.address && true}
            errorMessage="Add the address"
            defaultValue={product?.getDelivery?.address}
          />
          <TextField
            label="Phone"
            placeholder="0987654321"
            {...register('phone', { required: true })}
            hasError={errors.phone && true}
            errorMessage="Add the phone"
            defaultValue={product?.getDelivery?.phone}
          />
          <TextField
            label="Zip Code"
            placeholder="171010"
            {...register('zip', { required: true })}
            hasError={errors.zip && true}
            errorMessage="Add the zip"
            defaultValue={product?.getDelivery?.zip}
          />
          <TextField
            label="Address Details"
            {...register('details', { required: true })}
            hasError={errors.details && true}
            errorMessage="Add a details"
            defaultValue={product?.getDelivery?.details!}
          />
        </SpaceBetween>
      </Container>
    </Form>
  );
};

DeliveryForm.defaultProps = {
  product: undefined,
};
