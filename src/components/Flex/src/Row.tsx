import React from 'react';

import Flex, { FlexProps } from './Flex';

type RowProps = {
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline';
  justify?: 'flex-start' | 'space-between' | 'space-around' | 'flex-end';
  children: React.ReactNode;
} & FlexProps;

const Row = ({
  align = 'center',
  justify = 'space-between',
  children,
  ...props
}: RowProps) => (
  <Flex alignItems={align} justifyContent={justify} {...props}>
    {children}
  </Flex>
);

export default Row;
