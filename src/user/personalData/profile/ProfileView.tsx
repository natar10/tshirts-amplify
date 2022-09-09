import React, { useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { GetClientQuery, CreateClientInput } from '@api-types';
import { getClient } from '@graphql/queries';
import { Layout } from '@layout/Layout';
import { updateElement } from '@services/apiMutations';
import { updateClient } from '@graphql/mutations';
import { useElement } from '@services/swrHooks';
import { DataContainer } from '@data-management/DataContainer';
import { ClientForm } from './ProfileForm';

export const ClientView: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  const { data, isLoading, error, isValidating, mutate } =
    useElement<GetClientQuery>(getClient, user.username);

  const updateClientQuery = (updateData: CreateClientInput) => {
    if (user.username) {
      const options = { rollbackOnError: true };
      mutate(updateElement(updateData, user.username, updateClient), options);
    }
  };

  useEffect(() => {
    if (user.username && !isLoading && !isValidating) {
      data?.getClient ?? navigate('/profile/create', { replace: true });
    }
  }, [data, isLoading, isValidating]);

  return (
    <Layout title="My Profile">
      <DataContainer
        isLoading={isLoading}
        isValidating={isValidating}
        errors={error}
      >
        {data && (
          <ClientForm
            isLoading={isLoading || isValidating}
            onSubmit={(clientData) => updateClientQuery(clientData)}
            title="Update Client"
            client={data}
          />
        )}
      </DataContainer>
    </Layout>
  );
};
