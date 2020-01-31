import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { Experience, Feedback, Projects } from '../components/Sections'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout className="portfolio">
    <SEO title="The Portfolio of Joey Figaro" />
    <Hero />
    <Experience />
    <Feedback />
    <Projects />
  </Layout>
)

export default IndexPage
