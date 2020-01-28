import React from 'react'

import Flex from './Flex'

type RowProps = {
  width?: string | number
  className?: string
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline'
  justify?:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end'
  children: React.ReactNode
} & React.Props<typeof Flex>

const Row = ({
  width = '100%',
  align = 'center',
  justify = 'space-between',
  children,
  ...props
}: RowProps) => (
  <Flex
    className={props.className}
    width={width}
    alignItems={align}
    justifyContent={justify}
    {...props}
  >
    {children}
  </Flex>
)

export default Row
