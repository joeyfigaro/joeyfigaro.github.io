import React from 'react'
import styled from '@emotion/styled'

import Plane from '../../../images/icons/plane.svg'
import Dribbble from '../../../images/social/Icon/dribbble.svg'
import Github from '../../../images/social/Icon/github.svg'
import Twitter from '../../../images/social/Icon/twitter.svg'
import LinkedIn from '../../../images/social/Icon/linkedin.svg'
import Copyright from '../../Copyright'
// import styled from '../../../theme'
import { Column, Row } from '../../Flex'
import Button from '../../Button'

import * as styles from '../styles.module.scss'

// import FigaroSignature from '../../Figaro';

// const FooterPrimitive = styled(p => <Column {...p}>{p.children}</Column>)``

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
  return (
    <footer className={styles.Footer}>
      <Row justify="space-between" align="center">
        <Row width={1 / 3} align="center">
          <Row align="center" width={200}>
            <Button variant="plain">
              <Plane />
              <p>SAY HI</p>
            </Button>
          </Row>
          <Row justify="flex-start" align="center">
            <Row justify="flex-start" align="center">
              <a target="blank" href="//twitter.com/joeyfigaro">
                <Twitter className={styles.icon} />
              </a>
              <a target="blank" href="//github.com/joeyfigaro">
                <Github className={styles.icon} />
              </a>
              <a target="blank" href="//dribbble.com/joeyfigaro">
                <Dribbble className={styles.icon} />
              </a>
              <a target="blank" href="//linkedin.com/in/joeyfigaro">
                <LinkedIn className={styles.icon} />
              </a>
            </Row>
          </Row>
        </Row>
        <Column width={1 / 3}>
          <Button onClick={() => {}}>Download Resume</Button>
        </Column>
        <Column width={1 / 3} align="flex-end">
          &copy; 2019 Joey Figaro
        </Column>
      </Row>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default Footer
