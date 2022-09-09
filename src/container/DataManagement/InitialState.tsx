import React, { useEffect, useState } from 'react';
import { Spinner } from '@cloudscape-design/components';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { getUserInfo } from '@services/userSession';
import useAppStore from '@use-AppStore';
import { InitialStateLayout } from './InitialStateLayout';

type Props = { children: React.ReactElement };

export const InitialState: React.FC<Props> = ({ children }) => {
  const setCognitoUser = useAppStore((state) => state.setCognitoUser);
  const setUserProfile = useAppStore((state) => state.setUserProfile);
  const setIsAdmin = useAppStore((state) => state.setIsAdmin);
  const setIsLogged = useAppStore((state) => state.setIsLogged);
  const { user } = useAuthenticator((context) => [context.user]);
  const [stateUpdated, setStateUpdated] = useState(false);

  const { userData, isUserError, isUserLoading, mutate } = getUserInfo();

  useEffect(() => {
    if (!isUserLoading) {
      setCognitoUser(userData?.user);
      setIsAdmin(userData?.isAdmin);
      setIsLogged(userData?.user !== undefined);
      setUserProfile(userData?.profile);
      setStateUpdated(true);
    }
  }, [userData, isUserLoading]);

  useEffect(() => {
    mutate();
  }, [user]);

  if (isUserLoading || !stateUpdated) {
    return (
      <InitialStateLayout>
        <Spinner size="large" />
      </InitialStateLayout>
    );
  }

  if (isUserError) {
    return (
      <InitialStateLayout>
        <h1>
          System Ofline
          {isUserError}
        </h1>
      </InitialStateLayout>
    );
  }

  return children;
};
