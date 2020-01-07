import React from 'react'
import styled from '@emotion/styled'

import Copyright from '../../Copyright'
// import styled from '../../../theme'
import { Column, Row } from '../../Flex'
import Button from '../../Button'

// import FigaroSignature from '../../Figaro';

const FooterPrimitive = styled(p => <Column {...p}>{p.children}</Column>)`
  width: 100%;
  padding: 64px 0;
  background-color: #0a0a0a;
`

// const FooterColumn = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
//   justify-content: flex-start;
// `;

// const ColumnHeading = styled.h3`
//   flex: 1;
//   font-weight: 600;
//   text-decoration: underline;
// `;

// const Row = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

const Footer = (p: any): JSX.Element => {
  return <Copyright />
  // return (
  //   <>
  //     <FooterPrimitive>
  //       <Row maxWidth={1200}>
  //         <Column align="flex-start">
  //           <Button>Download Resume</Button>
  //           <Button>Hire Me</Button>
  //         </Column>
  //         <Row width={'33%'} justify="flex-start">
  //           <Column align="flex-start">
  //             <p>Test</p>
  //             <p>Test</p>
  //             <p>Test</p>
  //             <p>Test</p>
  //           </Column>
  //           <Column align="flex-start">
  //             <p>Test</p>
  //             <p>Test</p>
  //             <p>Test</p>
  //             <p>Test</p>
  //           </Column>
  //         </Row>
  //       </Row>
  //     </FooterPrimitive>
  //     <Copyright />
  //   </>
  // )
}

Footer.displayName = 'Footer'

export default Footer
