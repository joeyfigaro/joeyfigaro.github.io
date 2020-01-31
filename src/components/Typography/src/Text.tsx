import React from 'react'

const Text = (props: { children: React.ReactNode }) => {
  return <p {...props}>{props.children}</p>
}

Text.displayName = 'Text'

export default Text
