import React from 'react'
import { space, layout } from 'styled-system'
import styled from '@emotion/styled'

type DividerProps = {
  children: string
}

const DividerContainer = styled.div`
  ${space}
  ${layout}
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const HR = styled.hr`
  border-top: dashed 1px #404040;
  background: transparent;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
`

const Label = styled.span`
  position: relative;
  z-index: 1;
  padding: 8px 12px;
  border-radius: 24px;
  background-color: #0c0c0c;
  text-transform: uppercase;
  letter-spacing: 1%;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
`

const Divider = (props: DividerProps) => (
  <DividerContainer m="auto" width={[1, 1, 316]} marginBottom={[40, 40, 96]}>
    <Label>{props.children}</Label>
    <HR />
  </DividerContainer>
)

export default Divider
