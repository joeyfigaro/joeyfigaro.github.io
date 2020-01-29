import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { Experience, Testimonials, Projects } from '../components/Sections'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout className="portfolio">
    <SEO title="The Portfolio of Joey Figaro" />
    <Hero />
    <Experience />
    <Projects />
    <Testimonials />
    {/*<Intro /> */}
    {/*<div className="welcome">
      <h1>
        Joey Figaro is a developer, tinkerer, and entrepreneur based in
        Richmond, VA.
      </h1>
      <p>
        I’ve helped build software for drone flight planning, automated tax
        withholding for 1099 employees, and customizable laser-engraved goods;
        my current passion project is AntiPttrn—a place to document the impact
        of design that works against its users.
      </p>
      <p>I’m currently accepting clients at Shovel & Sandbox.</p>
    </div>
  <IsometricBoard />*/}
  </Layout>
)

export default IndexPage
