import styled from '@emotion/styled'
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
}

const Flex = styled('div', { shouldForwardProp })<FlexProps>`
  ${space}
  ${color}
  ${layout}
  ${typography}
  ${border}
  display: flex;
  ${flexbox}
`

export default Flex
