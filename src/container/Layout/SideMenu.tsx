import React from 'react';
import {
  Box,
  Button,
  Cards,
  SpaceBetween,
} from '@cloudscape-design/components';
import { Product } from '@api-types';
import { Link, useNavigate } from 'react-router-dom';
import { Divider } from '@aws-amplify/ui-react';
import useAppStore from '@use-AppStore';

export const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  const isAdmin = useAppStore((state) => state.isAdmin);
  const menuProducts = useAppStore((state) => state.menuProducts);

  return (
    <Box padding="xl">
      <h2>Menu</h2>
      <SpaceBetween size="m">
        {!isAdmin ? (
          <Cards
            cardDefinition={{
              header: (p: Product) => (
                <Box textAlign="center">
                  <Link to={`/product/${p.id}`}>
                    <h2>{p.name}</h2>
                  </Link>
                </Box>
              ),
              sections: [
                {
                  id: 'thumbnail',
                  content: (p) => (
                    <Link to={`/product/${p.id}`}>
                      <img width="100%" src={p.thumbnail} alt={p.name} />
                    </Link>
                  ),
                },
              ],
            }}
            cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 3 }]}
            items={menuProducts.map((product: Product) => ({
              name: product?.name,
              description: product?.description,
              thumbnail: product?.thumbnail,
              price: product?.price,
              id: product?.id,
            }))}
            loadingText="Loading products"
            trackBy="id"
            empty={
              <Box textAlign="center" color="inherit">
                <b>No products</b>
                <Box padding={{ bottom: 's' }} variant="p" color="inherit">
                  No products to display.
                </Box>
              </Box>
            }
          />
        ) : (
          <>
            <Divider orientation="horizontal" />
            <Button
              variant="link"
              onClick={() => navigate('/owner/products', { replace: true })}
            >
              Products
            </Button>
            <Button
              variant="link"
              onClick={() => navigate('/owner/orders', { replace: true })}
            >
              Orders
            </Button>
          </>
        )}
      </SpaceBetween>
    </Box>
  );
};
