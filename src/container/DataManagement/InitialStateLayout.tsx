import React from 'react';
import AppLayout from '@cloudscape-design/components/app-layout';
import { Amplify } from 'aws-amplify';
import { Box, TopNavigation } from '@cloudscape-design/components';
import styled from 'styled-components';
import awsExports from '@aws-exports';

Amplify.configure(awsExports);

type Props = {
  children: React.ReactElement;
};

const CenteredContent = styled(Box)`
  position: relative;
  top: 49%;
`;

export const InitialStateLayout: React.FC<Props> = ({ children }) => (
  <>
    <div id="header">
      <TopNavigation
        identity={{
          href: '/',
          title: 'T-shirts',
        }}
        i18nStrings={{
          overflowMenuBackIconAriaLabel: 'back-icon',
          overflowMenuDismissIconAriaLabel: 'dismiss-icon',
          overflowMenuTitleText: 'title-text',
          overflowMenuTriggerText: 'trigger-text',
          searchDismissIconAriaLabel: 'dismiss-search',
          searchIconAriaLabel: 'search-icon',
        }}
      />
    </div>
    <AppLayout
      content={<CenteredContent textAlign="center">{children}</CenteredContent>}
      toolsHide
      navigationHide
      headerSelector="#header"
    />
  </>
);
