import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from '@aws-exports';

Amplify.configure(awsExports);

export const addElement = <T>(data: T, createMutation: string) => {
  const createElement: Promise<GraphQLResult<any>> = API.graphql({
    ...graphqlOperation(createMutation, { input: data }),
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return createElement;
};

export const updateElement = <T>(
  data: T,
  elementId: string,
  updateMutation: string
) => {
  const element: T = {
    ...data,
    id: elementId,
  };
  const updatedElement: Promise<GraphQLResult<any>> = API.graphql({
    ...graphqlOperation(updateMutation, { input: element }),
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return updatedElement;
};

export const deleteElement = (elementId: string, deleteMutation: string) => {
  const deleteElementResult: Promise<GraphQLResult<any>> = API.graphql({
    query: deleteMutation,
    variables: { input: { id: elementId } },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return deleteElementResult;
};

export const getElement = (elementId: string, getQuery: string) => {
  const getElementResult: Promise<GraphQLResult<any>> = API.graphql({
    ...graphqlOperation(getQuery, { id: elementId }),
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return getElementResult;
};

export const getPublicElement = (
  elementId: string,
  getQuery: string,
  authUser: boolean
) => {
  const getElementResult: Promise<GraphQLResult<any>> = API.graphql({
    ...graphqlOperation(getQuery, { id: elementId }),
    authMode: authUser
      ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      : GRAPHQL_AUTH_MODE.AWS_IAM,
  });
  return getElementResult;
};

export const getAllElements = (getAllQuery: string) => {
  const getAllElementResult: Promise<GraphQLResult<any>> = API.graphql({
    query: getAllQuery,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
  return getAllElementResult;
};

export const getAllPublicElements = (
  getAllQuery: string,
  authUser: boolean
) => {
  const getAllPublicElementsResult: Promise<GraphQLResult<any>> = API.graphql({
    query: getAllQuery,
    authMode: authUser
      ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      : GRAPHQL_AUTH_MODE.AWS_IAM,
  });
  return getAllPublicElementsResult;
};
