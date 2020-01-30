/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import { IconContext } from 'react-icons'
// import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import Footer from './Footer'

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

  /* className="grt" */
  return (
    <IconContext.Provider
      value={{ color: 'white', style: { width: 21, height: 21 } }}
    >
      <div className="portfolio">
        <main>{children}</main>
        <Footer />
      </div>
    </IconContext.Provider>
  )
}

export default Layout
