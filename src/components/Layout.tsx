/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './Footer';

// import '../styles/typography.scss';
import '../styles/layout.scss';
import '../styles/portfolio.scss';

const Layout = ({
  children
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  /* className="grt" */
  return (
    <div className="portfolio">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
