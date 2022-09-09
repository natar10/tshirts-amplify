import { Amplify, Auth } from 'aws-amplify';

import { CognitoUser } from 'amazon-cognito-identity-js';
import useSWR from 'swr';
import { Client } from '@api-types';
import { getClient, listProducts } from '@graphql/queries';
import awsExports from '@aws-exports';
import { getElement, getAllPublicElements } from './apiMutations';

Amplify.configure(awsExports);

export const getUserSession = () =>
  Auth.currentAuthenticatedUser().then((user) => user);

export const isAdmin = (user: any): boolean => {
  const isPartOfGroup =
    user.signInUserSession.accessToken.payload['cognito:groups'];
  return isPartOfGroup ? isPartOfGroup.includes('Admins') : false;
};

export const getUserProfile = (
  user: CognitoUser
): Promise<Client | undefined> =>
  getElement(user.getUsername(), getClient)
    .then((response) => response.data?.getClient)
    .catch(() => undefined);

export const getUserInfo = () => {
  const fetcher = () =>
    getUserSession()
      .then((user) => {
        if (user) {
          return getUserProfile(user).then((profile) => ({
            user,
            profile,
            isAdmin: isAdmin(user),
          }));
        }
        throw new Error();
      })
      .catch(() => ({
        user: undefined,
        profile: undefined,
        isAdmin: false,
      }));
  const { data, error, mutate, isValidating } = useSWR('/', fetcher);
  return {
    userData: data,
    isUserLoading: !error && !data,
    isUserError: error,
    mutate,
    isValidating,
  };
};

export const getMainProducts = (authUser: boolean) => {
  const { data, error, isValidating } = useSWR(
    listProducts,
    (query) => getAllPublicElements(query, authUser),
    { revalidateOnFocus: false }
  );
  return {
    products: data,
    isProductsLoading: !error && !data,
    isProductsError: error,
    isValidating,
  };
};
