import React from 'react';
import { Header, SpaceBetween } from '@cloudscape-design/components';

type Props = {
  title: string;
  buttons?: JSX.Element;
};

export const ContentHeader: React.FC<Props> = ({ title, buttons }) => (
  <Header
    variant="h1"
    actions={
      <SpaceBetween direction="horizontal" size="xs">
        {buttons}
      </SpaceBetween>
    }
  >
    {title}
  </Header>
);

ContentHeader.defaultProps = {
  buttons: <span />,
};
