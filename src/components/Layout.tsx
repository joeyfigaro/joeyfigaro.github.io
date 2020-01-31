import React from 'react'
import { IconContext } from 'react-icons'
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
      {/*
      <LayoutContext.Provider
        value={{ sidePanelVisible, closeSidePanel, openSidePanel }}
      >
    */}
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
