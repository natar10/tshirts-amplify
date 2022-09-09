import React from 'react';
import { AppLayout, BreadcrumbGroup } from '@cloudscape-design/components';
import { Amplify } from 'aws-amplify';
import { ErrorBoundary } from 'react-error-boundary';
import awsExports from '@aws-exports';
import { TopMenu } from './TopMenu';
import { SideMenu } from './SideMenu';
import { CartSummary } from '../CartLayout/CartSummary';
import { Footer } from './Footer';
import { ContentHeader } from './ContentHeader';
import { ErrorFallback } from '../DataManagement/ErrorFallback';

Amplify.configure(awsExports);

type Props = {
  children: React.ReactElement;
  title: string;
  topButtons?: JSX.Element;
  breadCrumbs?: {
    text: string;
    href: string;
  }[];
};

export const Layout: React.FC<Props> = ({
  breadCrumbs,
  children,
  title,
  topButtons,
}) => (
  <>
    <TopMenu />
    <AppLayout
      content={
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      }
      toolsHide
      navigation={<SideMenu />}
      splitPanelPreferences={{ position: 'side' }}
      splitPanel={<CartSummary />}
      contentHeader={<ContentHeader title={title} buttons={topButtons} />}
      contentType="form"
      headerSelector="#header"
      footerSelector="#footer"
      breadcrumbs={
        <BreadcrumbGroup items={breadCrumbs || []} ariaLabel="Breadcrumbs" />
      }
    />
    <Footer />
  </>
);

Layout.defaultProps = {
  topButtons: <span />,
  breadCrumbs: [],
};
