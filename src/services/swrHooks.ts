import { Amplify } from 'aws-amplify';

import useSWR, { KeyedMutator } from 'swr';
import { GraphQLResult } from '@aws-amplify/api';
import { GraphQLError } from 'graphql';
import awsExports from '@aws-exports';
import { getElement, getAllElements, getPublicElement } from './apiMutations';

Amplify.configure(awsExports);

type SWRFetch<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: GraphQLError[] | undefined;
  isValidating: boolean;
  mutate: KeyedMutator<GraphQLResult<T>>;
};

export const useElement = <T>(
  graphqlOperation: string,
  elementId?: string
): SWRFetch<T> => {
  const { data, error, isValidating, mutate } = useSWR(
    [elementId, graphqlOperation],
    getElement,
    {
      revalidateOnFocus: false,
    }
  );
  return {
    data: data ? data.data : undefined,
    isLoading: !error && !data,
    error: data?.errors,
    isValidating,
    mutate,
  };
};

export const useElements = <T>(graphqlOperation: string): SWRFetch<T> => {
  const { data, error, isValidating, mutate } = useSWR(
    graphqlOperation,
    getAllElements,
    {
      revalidateOnFocus: false,
    }
  );
  return {
    data: data ? data.data : undefined,
    isLoading: !error && !data,
    error: data?.errors,
    isValidating,
    mutate,
  };
};

export const usePublicElement = <T>(
  graphqlOperation: string,
  authUser: boolean,
  elementId?: string
): SWRFetch<T> => {
  const { data, error, isValidating, mutate } = useSWR(
    [elementId, graphqlOperation],
    (id, query) => getPublicElement(id!, query, authUser),
    {
      revalidateOnFocus: false,
    }
  );
  return {
    data: data ? data.data : undefined,
    isLoading: !error && !data,
    error: data?.errors,
    isValidating,
    mutate,
  };
};
