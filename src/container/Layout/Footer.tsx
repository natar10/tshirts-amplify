import React from 'react';
import {
  TopNavigation,
  TopNavigationProps,
} from '@cloudscape-design/components';
import { Amplify } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import useAppStore from '@use-AppStore';
import awsExports from '@aws-exports';

Amplify.configure(awsExports);

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const menuProducts = useAppStore((state) => state.menuProducts);

  const productLinks: TopNavigationProps.ButtonUtility[] = menuProducts.map(
    (product) => ({
      type: 'button',
      variant: 'link',
      text: product.name,
      onClick: () => navigate(`/product/${product.id}`),
    })
  );

  return (
    <div id="footer">
      <TopNavigation
        identity={{
          href: '/',
          title: 'T-shirts',
        }}
        i18nStrings={{
          overflowMenuBackIconAriaLabel: 'string',
          overflowMenuDismissIconAriaLabel: 'string',
          overflowMenuTitleText: 'string',
          overflowMenuTriggerText: 'string',
          searchDismissIconAriaLabel: 'string',
          searchIconAriaLabel: 'string',
        }}
        utilities={[
          {
            type: 'button',
            variant: 'link',
            text: 'Home',
            onClick: () => navigate('/'),
          },
          ...productLinks,
          {
            type: 'button',
            variant: 'primary-button',
            text: 'My Cart',
            onClick: () => navigate('/cart'),
          },
        ]}
      />
    </div>
  );
};
