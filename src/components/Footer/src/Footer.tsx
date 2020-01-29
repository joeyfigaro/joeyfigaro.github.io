import React from 'react'
import cx from 'classnames'
import { FiTwitter, FiLinkedin, FiGithub, FiSend, FiLink } from 'react-icons/fi'
import { IoLogoDribbble } from 'react-icons/io'

import Copyright from '../../Copyright'
import { Column, Row } from '../../Flex'
import Button from '../../Button'

import * as styles from '../styles.module.scss'

const Footer = (p: any): JSX.Element => {
  return (
    <footer className={styles.Footer}>
      <Row className={styles.actions} align="center">
        <Row className={styles.contact} align="center">
          <Button variant="plain">
            <FiSend />
            <p>SAY HI</p>
          </Button>
        </Row>
        <Row className={styles.icons} justify="space-between" align="center">
          <a target="blank" href="//twitter.com/joeyfigaro">
            <FiTwitter className={styles.icon} />
          </a>
          <a target="blank" href="//github.com/joeyfigaro">
            <FiGithub className={styles.icon} />
          </a>
          <a target="blank" href="//dribbble.com/joeyfigaro">
            <IoLogoDribbble className={cx(styles.icon, styles.dribbble)} />
          </a>
          <a target="blank" href="//linkedin.com/in/joeyfigaro">
            <FiLinkedin className={cx(styles.icon, styles.linkedin)} />
          </a>
        </Row>
      </Row>
      <Column className={styles.resume}>
        <Button onClick={() => {}}>Download Resume</Button>
      </Column>
      <Column className={styles.copyright}>&copy; 2019 Joey Figaro</Column>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default Footer
