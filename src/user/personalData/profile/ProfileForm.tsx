import React from 'react';
import Form from '@cloudscape-design/components/form';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import { Heading, TextField, useAuthenticator } from '@aws-amplify/ui-react';
import { useForm } from 'react-hook-form';
import { CreateClientInput, GetClientQuery } from '@api-types';

type Props = {
  isLoading: boolean;
  onSubmit: (data: CreateClientInput) => void;
  title: string;
  client?: GetClientQuery;
};

export const ClientForm: React.FC<Props> = ({
  isLoading,
  onSubmit,
  client,
}) => {
  const { user } = useAuthenticator((context) => [context.user]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClientInput>();

  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button
            loading={isLoading}
            formAction="submit"
            onClick={() => handleSubmit(onSubmit)()}
            variant="primary"
          >
            {client ? 'Update' : 'Submit'}
          </Button>
        </SpaceBetween>
      }
    >
      <Container
        header={
          <Header variant="h2">
            {client
              ? 'You can update your profile here:'
              : 'Complete the following form:'}
          </Header>
        }
      >
        <SpaceBetween direction="vertical" size="l">
          <TextField
            label="First Name"
            {...register('name', { required: true })}
            hasError={errors.name && true}
            errorMessage="Add your name"
            defaultValue={client?.getClient?.name}
          />
          <TextField
            label="Last Name"
            {...register('lastname', { required: true })}
            hasError={errors.lastname && true}
            errorMessage="Add your last name"
            defaultValue={client?.getClient?.lastname}
          />
          <Heading level={5}>
            Email:
            {user.attributes?.email}
          </Heading>
          <TextField
            label="City"
            placeholder="Miami"
            {...register('city', { required: true })}
            hasError={errors.city && true}
            errorMessage="Client have a city"
            defaultValue={client?.getClient?.city}
          />
          <TextField
            label="Country"
            placeholder="USA"
            {...register('country', { required: true })}
            hasError={errors.country && true}
            errorMessage="Add a country"
            defaultValue={client?.getClient?.country}
          />
          <TextField
            label="State"
            placeholder="Florida"
            {...register('state', { required: true })}
            hasError={errors.state && true}
            errorMessage="Add the state"
            defaultValue={client?.getClient?.state}
          />
          <TextField
            label="Phone"
            placeholder="0987654321"
            {...register('phone', { required: true })}
            hasError={errors.phone && true}
            errorMessage="Add the phone"
            defaultValue={client?.getClient?.phone}
          />
          <TextField
            label="Zip Code"
            placeholder="171010"
            {...register('zip', { required: true })}
            hasError={errors.zip && true}
            errorMessage="Add the zip"
            defaultValue={client?.getClient?.zip}
          />
        </SpaceBetween>
      </Container>
    </Form>
  );
};

ClientForm.defaultProps = {
  client: undefined,
};
