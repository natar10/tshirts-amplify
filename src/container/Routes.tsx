import React from 'react';
import { Route } from 'react-router-dom';
import { createProfileRoutes } from '../user/personalData/profile/profile.routes';
import { createAddressRoutes } from '../user/personalData/delivery/address.routes';
import { createCartRoutes } from '../user/cart/cart.routes';
import { createOrdersRoutes } from '../owner/orders/orders.routes';
import { createProductsRoutes } from '../owner/products/products.routes';

const addressRoutes = createAddressRoutes();
const profileRoutes = createProfileRoutes();
const cartRoutes = createCartRoutes();
const ordersRoutes = createOrdersRoutes();
const productsRoutes = createProductsRoutes();

const routes = (
  <Route path="/">
    {cartRoutes.routes}
    {addressRoutes.routes}
    {profileRoutes.routes}
    {ordersRoutes.routes}
    {productsRoutes.routes}
  </Route>
);

export function AppRoutes() {
  return routes;
}
