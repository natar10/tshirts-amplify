import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Button as AddButton,
  Flashbar,
  SpaceBetween,
} from '@cloudscape-design/components';
import { Button, StepperField } from '@aws-amplify/ui-react';
import { useCart } from 'react-use-cart';
import { ProductOptions, Product } from '@api-types';

type Props = {
  product: Product;
  options: ({
    __typename: 'ProductOptions';
    name: string;
    thumbnail: string;
    colorCode: string;
    stock: number;
  } | null)[];
};

const OptionButton = styled(Button)`
  width: 40px;
  height: 40px;
`;

export const ProductOptionsList: React.FC<Props> = ({ product, options }) => {
  const { addItem, inCart } = useCart();
  const [selected, setSelected] = useState<ProductOptions | null>(
    options[0] || null
  );
  const [quantity, setQuantity] = useState<number>(1);

  const addToCart = () => {
    addItem(
      {
        id: `${product.id}-${selected?.colorCode}`,
        price: product.price,
        productID: product.id,
        productName: product.name,
        productColor: selected?.name,
        productThumbnail: selected?.thumbnail,
        quantity,
        total: quantity * product.price,
      },
      quantity
    );
  };

  const [itemOnCart, setItemOnCart] = useState([
    {
      dismissible: true,
      onDismiss: () => setItemOnCart([]),
      content: <>This item is already in your cart</>,
    },
  ]);

  return (
    <>
      <p>Choose your favorite color:</p>
      <SpaceBetween direction="horizontal" size="m">
        {options.map((option) => (
          <OptionButton
            key={option?.name}
            backgroundColor={option?.colorCode}
            onClick={() => setSelected(option)}
          />
        ))}
      </SpaceBetween>

      {selected && (
        <>
          <h2>{selected.name}</h2>

          {inCart(`${product.id}-${selected.colorCode}`) && (
            <Flashbar items={itemOnCart} />
          )}
          <h5>
            Stock:
            {selected.stock}
          </h5>
          <SpaceBetween direction="vertical" size="m">
            <StepperField
              max={selected.stock}
              min={1}
              step={1}
              label="Chose quantity"
              defaultValue={1}
              onStepChange={setQuantity}
            />
            <AddButton
              iconAlign="right"
              iconName="add-plus"
              disabled={selected.stock < 1}
              onClick={addToCart}
              variant="primary"
            >
              Add to cart
            </AddButton>
          </SpaceBetween>
        </>
      )}
    </>
  );
};
