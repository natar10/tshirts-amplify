import React from 'react';
import Form from '@cloudscape-design/components/form';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import {
  Divider,
  Flex,
  SwitchField,
  TextField,
  Text,
} from '@aws-amplify/ui-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CreateProductInput, GetProductQuery } from '@api-types';

type Props = {
  isLoading: boolean;
  onSubmit: (data: CreateProductInput) => void;
  title: string;
  product?: GetProductQuery;
};

export const ProductForm: React.FC<Props> = ({
  isLoading,
  onSubmit,
  product,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductInput>();
  const navigate = useNavigate();

  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="link" onClick={() => navigate('/owner/products/')}>
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
            defaultValue={product?.getProduct?.name}
          />
          <TextField
            label="Price"
            {...register('price', { required: true })}
            hasError={errors.price && true}
            errorMessage="Add a price"
            defaultValue={product?.getProduct?.price}
          />
          <TextField
            label="Thumbnail URL"
            {...register('thumbnail', { required: true })}
            hasError={errors.thumbnail && true}
            errorMessage="Add a thumbnail"
            defaultValue={product?.getProduct?.thumbnail}
          />
          <TextField
            label="Images URLs"
            {...register('images', { required: true })}
            hasError={errors.images && true}
            errorMessage="Add at least one image URL"
            defaultValue={product?.getProduct?.images[0]}
          />
          <TextField
            label="Description"
            placeholder="Cotton T-shirts"
            {...register('description', { required: true })}
            hasError={errors.description && true}
            errorMessage="description"
            defaultValue={product?.getProduct?.description}
          />
          <SwitchField
            label="Product Available"
            labelPosition="start"
            {...register('avilable', { required: true })}
            isChecked={product?.getProduct?.avilable}
          />
          <SwitchField
            label="Product is unlimited"
            labelPosition="start"
            {...register('unlimited', { required: true })}
            isChecked={product?.getProduct?.avilable}
          />

          <Flex direction="column">
            <Text>Add product options</Text>
            <Divider orientation="horizontal" />
          </Flex>

          <TextField
            label="Name"
            placeholder="Black"
            {...register('options.0.name', { required: true })}
            hasError={errors.options && true}
            errorMessage="Option should have a name"
            defaultValue={product?.getProduct?.options[0]?.name}
          />
          <TextField
            label="Color code"
            placeholder="#000"
            {...register('options.0.colorCode', { required: true })}
            hasError={errors.options && true}
            errorMessage="Option should have a color"
            defaultValue={product?.getProduct?.options[0]?.colorCode}
          />
          <TextField
            label="Thumbnail"
            {...register('options.0.thumbnail', { required: true })}
            hasError={errors.options && true}
            errorMessage="Option should have a thumbnail"
            defaultValue={product?.getProduct?.options[0]?.thumbnail}
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
            defaultValue={product?.getProduct?.options[0]?.stock}
          />
        </SpaceBetween>
      </Container>
    </Form>
  );
};

ProductForm.defaultProps = {
  product: undefined,
};
