import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  flexbox,
  space,
  layout,
  border,
  typography,
  system,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  TypographyProps,
  BorderProps
} from 'styled-system';

const whiteSpace = system({
  whiteSpace: true
});
export interface FlexProps
  extends FlexboxProps,
    LayoutProps,
    SpaceProps,
    TypographyProps,
    BorderProps {
  whiteSpace?: 'nowrap' | 'pre';
}

const Flex = styled('div', { shouldForwardProp })<FlexProps>`
  ${space}
  ${flexbox}
  ${layout}
  ${typography}
  ${border}
  ${whiteSpace}
`;

export default Flex;
