import React from 'react'
import cx from 'classnames'
import { FiTwitter, FiLinkedin, FiGithub, FiSend, FiLink } from 'react-icons/fi'
import { IoLogoDribbble } from 'react-icons/io'
import handleViewport from 'react-in-viewport'

import { Column, Row } from '../../Flex'
import Button from '../../Button'
import ContactForm from '../../ContactForm'
// import { LayoutContext } from '../../Layout'

import * as styles from '../styles.module.scss'

const Footer = (p: any): JSX.Element => {
  const { inViewport, forwardedRef } = p
  // const { openSidePanel } = React.useContext(LayoutContext)
  const [contactIsVisible, setContactIsVisible] = React.useState<boolean>(false)
  const revealContactForm = () => setContactIsVisible(true)

  return (
    <footer
      ref={forwardedRef}
      className={cx(styles.FooterWrapper, { [styles.Open]: contactIsVisible })}
    >
      <Row className={cx(styles.Footer, { [styles.sticky]: !inViewport })}>
        <Row className={styles.actions} align="center">
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
          <a
            className={styles.resumeButton}
            target="blank"
            rel="nofollow"
            href="https://docs.google.com/document/d/1mGNyecSmEvUEqY2QdnOzdeQ9idSG2ymLQpdS-6RZT1k"
          >
            Download Resume
          </a>
        </Column>
        <Column className={styles.copyrightAndScrollIcon}>
          <p className={cx(styles.copyright, { [styles.hidden]: !inViewport })}>
            &copy; 2019 Joey Figaro
          </p>
          <div
            className={cx(styles.scrollIcon, { [styles.hidden]: inViewport })}
          >
            <div className={styles.scrollIconInner}>
              <div className={styles.scrollIconWheel} />
            </div>
          </div>
        </Column>
      </Row>
      {/*<ContactForm visible={sidePanelVisible} />*/}
    </footer>
  )
}

const ViewportAwareFooter = handleViewport(Footer, {}, {})

ViewportAwareFooter.displayName = 'Footer'

export default ViewportAwareFooter
