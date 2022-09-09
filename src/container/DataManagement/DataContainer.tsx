import React from 'react';
import Container from '@cloudscape-design/components/container';
import { Spinner } from '@cloudscape-design/components';
import { GraphQLError } from 'graphql';
import { ErrorNotification } from './ErrorNotification';

type Props = {
  isLoading: boolean;
  isValidating: boolean;
  children: React.ReactNode;
  errors?: GraphQLError[];
  header?: React.ReactNode;
};

export function DataContainer({
  isLoading,
  isValidating,
  errors,
  children,
  header,
}: Props) {
  return (
    <Container header={header}>
      <>
        {(isLoading || isValidating) && <Spinner size="large" />}
        {errors && errors.length > 0 && <ErrorNotification errors={errors} />}
        {children}
      </>
    </Container>
  );
}

DataContainer.defaultProps = {
  errors: [],
  header: <span />,
};
