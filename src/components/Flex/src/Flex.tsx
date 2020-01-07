import { forwardRef } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  flexbox,
  space,
  layout,
  border,
  typography,
  system,
  color,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  TypographyProps,
  BorderProps,
  ColorProps
} from 'styled-system'

export interface FlexProps
  extends FlexboxProps,
    LayoutProps,
    SpaceProps,
    ColorProps,
    TypographyProps,
    BorderProps {
  style?: React.CSSProperties
  ref?: React.Ref<HTMLElement>
}

const Flex = styled(motion.div, { shouldForwardProp })<FlexProps>`
  display: flex;
  ${space}
  ${color}
  ${layout}
  ${typography}
  ${border}
  ${flexbox}
`

export default forwardRef((props, ref) => (
  <Flex {...props} ref={ref}>
    {props.children}
  </Flex>
))
