import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import awsExports from './aws-exports';
import { useForm } from 'react-hook-form';

import {
  Authenticator,
  SwitchField,
  TextField,
  useAuthenticator,
} from '@aws-amplify/ui-react';
import {
  AppLayout,
  Container,
  Form,
  Header,
  SpaceBetween,
  Button,
} from '@awsui/components-react';

import { createProduct } from './graphql/mutations';
import { CreateProductInput } from './API';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { Amplify, API, graphqlOperation } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductInput>();
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [isLoading, setLoading] = useState(false);

  const addProduct = (data: CreateProductInput) => {
    setLoading(true);

    const createProductRequest: Promise<GraphQLResult<any>> = API.graphql({
      ...graphqlOperation(createProduct, { input: data }),
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });

    createProductRequest
      .then(() => {
        alert('Product created!');
      })
      .catch(() => alert('There was an error creating the product'))
      .finally(() => setLoading(false));
  };

  return (
    <AppLayout
      navigation={
        <>
          <SpaceBetween direction="vertical" size="l">
            <h1>T-shirts</h1>
            <Button onClick={signOut} variant="primary">
              Sign Out
            </Button>
          </SpaceBetween>
        </>
      }
      content={
        <Form
          actions={
            <Button
              loading={isLoading}
              formAction="submit"
              onClick={() => handleSubmit(addProduct)()}
              variant="primary"
            >
              Create Product
            </Button>
          }
        >
          <SpaceBetween direction="vertical" size="l">
            <Container
              header={
                <Header variant="h3">
                  Complete the following form and add the variants:
                </Header>
              }
            >
              <SpaceBetween direction="vertical" size="l">
                <TextField
                  label="Name"
                  placeholder="T-shirt"
                  {...register('name', { required: true })}
                  hasError={errors.name && true}
                  errorMessage="Product should be named"
                />
                <TextField
                  label="Price"
                  {...register('price', { required: true })}
                  hasError={errors.price && true}
                  errorMessage="Add a price"
                />
                <TextField
                  label="Thumbnail URL"
                  {...register('thumbnail', { required: true })}
                  hasError={errors.thumbnail && true}
                  errorMessage="Add a thumbnail"
                />
                <TextField
                  label="Images URLs"
                  {...register('images', { required: true })}
                  hasError={errors.images && true}
                  errorMessage="Add at least one image URL"
                />
                <TextField
                  label="Description"
                  placeholder="Cotton T-shirts"
                  {...register('description', { required: true })}
                  hasError={errors.description && true}
                  errorMessage="description"
                />
                <SwitchField
                  label="Product Available"
                  labelPosition="start"
                  {...register('avilable', { required: true })}
                  isChecked={true}
                />
                <SwitchField
                  label="Product is unlimited"
                  labelPosition="start"
                  {...register('unlimited', { required: true })}
                  isChecked={true}
                />

                <h3>Add product options</h3>

                <TextField
                  label="Name"
                  placeholder="Black"
                  {...register('options.0.name', { required: true })}
                  hasError={errors.options && true}
                  errorMessage="Option should have a name"
                />
                <TextField
                  label="Color code"
                  placeholder="#000"
                  {...register('options.0.colorCode', { required: true })}
                  hasError={errors.options && true}
                  errorMessage="Option should have a color"
                />
                <TextField
                  label="Thumbnail"
                  {...register('options.0.thumbnail', { required: true })}
                  hasError={errors.options && true}
                  errorMessage="Option should have a thumbnail"
                />
                <TextField
                  label="Stock"
                  {...register('options.0.stock', {
                    required: true,
                    min: 0,
                    max: 100,
                  })}
                  hasError={errors.options && true}
                  errorMessage="Specify the stock"
                />
              </SpaceBetween>
            </Container>
          </SpaceBetween>
        </Form>
      }
    />
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <Authenticator>
        <App />
      </Authenticator>
    </Authenticator.Provider>
  </React.StrictMode>
);
