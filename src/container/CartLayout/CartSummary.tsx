import React from 'react';
import { SplitPanel } from '@cloudscape-design/components';
import { Amplify } from 'aws-amplify';
import awsExports from '@aws-exports';
import { CartItems } from './CartItems';

Amplify.configure(awsExports);

export const CartSummary: React.FC = () => (
  <SplitPanel
    header="Cart Summary"
    hidePreferencesButton
    children={<CartItems />}
    i18nStrings={{
      closeButtonAriaLabel: 'close Button',
      openButtonAriaLabel: 'open Button',
      preferencesCancel: 'preferences Cancel',
      preferencesConfirm: 'preferences Confirm',
      preferencesPositionBottom: 'preferences Position Bottom',
      preferencesPositionDescription: 'preferences Position Description',
      preferencesPositionLabel: 'preferences Position Label',
      preferencesPositionSide: 'preferences Position Side',
      preferencesTitle: 'preferences Title',
      resizeHandleAriaLabel: 'resize Handle',
    }}
  />
);
