import React from 'react';

import Flex, { FlexProps } from './Flex';

type ColumnProps = {
  children?: React.ReactNode;
} & FlexProps;

const Column = (props: ColumnProps) => (
  <Flex flexDirection="column" {...props}>
    {props.children}
  </Flex>
);

export default Column;
