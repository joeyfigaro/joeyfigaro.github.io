import React, { forwardRef } from 'react'

export interface FlexProps {
  style?: React.CSSProperties
  ref?: React.Ref<HTMLElement>
}

// const Flex = styled('div', { shouldForwardProp })<FlexProps>`
//   display: flex;
//   ${space}
//   ${color}
//   ${layout}
//   ${typography}
//   ${border}
//   ${flexbox}
// `

export default forwardRef((props, ref) => {
  return <div {...props}>{props.children}</div>
})
