import React, { useEffect } from 'react';
import {
  Container,
  Header,
  Button,
  Cards,
  Box,
} from '@cloudscape-design/components';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '@api-types';
import { Layout } from '@layout/Layout';
import { getMainProducts } from '@services/userSession';
import useAppStore from '@use-AppStore';

export const ProductCatalog: React.FC = () => {
  const navigate = useNavigate();
  const isLogged = useAppStore((state) => state.isLogged);
  const setProducts = useAppStore((state) => state.setProducts);
  const { products, isProductsLoading, isProductsError, isValidating } =
    getMainProducts(isLogged);
  const catalogProducts = !isProductsLoading
    ? products?.data.listProducts.items
    : ([] as Product[]);

  useEffect(() => {
    if (catalogProducts) setProducts(catalogProducts);
  }, [catalogProducts]);

  return (
    <Layout title="Checkout our products">
      <Container
        header={<Header variant="h2">Browse your style and customize!</Header>}
      >
        {isProductsError && !isProductsLoading && (
          <h3>Error loading the products</h3>
        )}
        {catalogProducts && (
          <Cards
            cardDefinition={{
              sections: [
                {
                  id: 'thumbnail',
                  content: (p: Product) => (
                    <Link to={`/product/${p.id}`}>
                      <img width="100%" src={p.thumbnail} alt={p.name} />
                    </Link>
                  ),
                },
                {
                  id: 'description',
                  content: (p) => <p style={{ margin: 0 }}>{p.description}</p>,
                },
                {
                  id: 'price',
                  content: (p) => <h2 style={{ margin: 0 }}>${p.price}</h2>,
                },
                {
                  id: 'link',
                  content: (p) => (
                    <Box textAlign="center">
                      <Button
                        iconName="add-plus"
                        iconAlign="right"
                        onClick={() => navigate(`/product/${p.id}`)}
                      >
                        See more
                      </Button>
                    </Box>
                  ),
                },
              ],
            }}
            cardsPerRow={[{ cards: 1 }, { minWidth: 200, cards: 3 }]}
            items={catalogProducts.map((product: Product) => ({
              name: product?.name,
              description: product?.description,
              thumbnail: product?.thumbnail,
              price: product?.price,
              id: product?.id,
            }))}
            loading={isProductsLoading || isValidating}
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
        )}
      </Container>
    </Layout>
  );
};
