import React from 'react';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { Card, Icon } from '@aws-amplify/ui-react';
import { ProductOptions } from '@api-types';

type Props = {
  options: (ProductOptions | null)[];
};

export const ProductOptionsList: React.FC<Props> = ({ options }) => (
  <>
    {options.map((option) => (
      <Card key={option?.name}>
        <SpaceBetween direction="vertical" size="l">
          <span>{option?.name}</span>
          <Icon
            pathData="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
            viewBox={{
              width: 24,
              height: 60,
            }}
            color={option?.colorCode.substring(1)}
            ariaLabel="Color Code"
          />
          <span>{option?.stock}</span>
        </SpaceBetween>
      </Card>
    ))}
  </>
);
