import React from 'react'
import { IconContext } from 'react-icons'
import Helmet from 'react-helmet'
import cx from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'

import Footer from './Footer'
import styles from './styles.module.scss'

// export const LayoutContext = React.createContext({
//   sidePanelVisible: null,
//   openSidePanel: null,
//   closeSidePanel: null
// })

const Layout = ({
  children
}: {
  children: React.ReactNode
  className?: string
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // const [sidePanelVisible, setSidePanelVisible] = React.useState<boolean>(false)
  // const openSidePanel = React.useCallback(() => setSidePanelVisible(true), [])
  // const closeSidePanel = React.useCallback(() => setSidePanelVisible(false), [])

  return (
    <IconContext.Provider
      value={{ color: 'white', style: { width: 21, height: 21 } }}
    >
      <Helmet>
        <title>
          Mobile and Web Development — Personal Showcase | Joey Figaro
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Mobile and Web Development — Personal Showcase | Joey Figaro"
        />
        <meta
          property="og:description"
          content="I'm an RVA native who lives to build interfaces and applications for the web, mobile, and everything in-between."
        />
        <meta
          property="og:image"
          content="https://joeyfigaro.com/generated-preview.png"
        />
        <meta property="og:url" content="https://joeyfigaro.com" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://joeyfigaro.com" />
      </Helmet>
      <div className={cx(styles.Perspective)}>
        <main className={styles.Content}>
          {children}
          <Footer />
        </main>
      </div>
    </IconContext.Provider>
  )
}

export default Layout
