import React from 'react';
import { TopNavigation } from '@cloudscape-design/components';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import styled from 'styled-components';
import useAppStore from '@use-AppStore';
import awsExports from '@aws-exports';

const TopNavCustom = styled(TopNavigation)`
  button[type='submit'] {
    background: #fff !important;
  }
`;

Amplify.configure(awsExports);

export const TopMenu: React.FC = () => {
  const { totalItems } = useCart();
  const { signOut } = useAuthenticator((context) => [context.user]);
  const userProfile = useAppStore((state) => state.userProfile);
  const resetUserSession = useAppStore((state) => state.resetUserSession);
  const navigate = useNavigate();

  const signOutUser = () => {
    signOut();
    resetUserSession();
    navigate('/');
  };

  const authneticatedMenuItems = [
    {
      id: 'profile',
      text: 'My profile',
    },
    {
      id: 'address',
      text: 'My addresses',
    },
    {
      id: 'orders',
      text: 'My orders',
    },
    {
      id: 'sign-out',
      text: 'Sign Out',
    },
  ];

  const signInrMenu = [
    {
      id: 'profile/signin',
      text: 'Sign In',
    },
  ];

  const menuItems = userProfile ? authneticatedMenuItems : signInrMenu;

  return (
    <div id="header">
      <TopNavCustom
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
        utilities={[
          {
            type: 'button',
            variant: 'link',
            text: 'Home',
            onClick: () => navigate('/'),
          },
          {
            type: 'menu-dropdown',
            text: `${
              userProfile ? `Hi ${userProfile.name} - Profile` : 'Profile'
            }`,
            iconName: 'user-profile',
            items: menuItems,
            onItemClick: (item) => {
              item.detail.id === 'sign-out'
                ? signOutUser()
                : navigate(`/${item.detail.id}`);
            },
          },
          {
            type: 'button',
            iconName: 'notification',
            badge: totalItems > 0,
            text: `${totalItems > 0 ? `(${totalItems})` : ''} My Cart`,
            onClick: () => navigate('/cart'),
          },
        ]}
      />
    </div>
  );
};
