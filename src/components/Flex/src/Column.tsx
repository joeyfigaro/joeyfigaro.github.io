import React from 'react'

import Flex, { FlexProps } from './Flex'

type ColumnProps = {
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline'
  justify?:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end'
  children?: React.ReactNode
} & FlexProps

const Column = ({
  align = 'center',
  justify = 'space-between',
  ...props
}: ColumnProps) => (
  <Flex
    flexDirection="column"
    justifyContent={justify}
    alignItems={align}
    {...props}
  >
    {props.children}
  </Flex>
)

export default Column
