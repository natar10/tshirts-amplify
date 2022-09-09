import React, { useState } from 'react';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@layout/Layout';

import { CreateClientInput } from '@api-types';
import { createClient } from '@graphql/mutations';

import { addElement } from '@services/apiMutations';
import useAppStore from '@use-AppStore';
import { ClientForm } from './ProfileForm';

export const CreateClient: React.FC = () => {
  const setToogleState = useAppStore((state) => state.setToogleState);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuthenticator((context) => [context.user]);

  const addClient = (data: CreateClientInput) => {
    setLoading(true);
    addElement(
      {
        ...data,
        id: user.username,
        user: user.username,
        email: user.attributes?.email,
      },
      createClient
    )
      .then(() => {
        setToogleState();
        navigate('/profile', { replace: true });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout title="Create My Profile">
      <ClientForm
        isLoading={isLoading}
        onSubmit={(data) => addClient(data)}
        title="Create a new Client"
      />
    </Layout>
  );
};
