import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Cover from '../images/covers/campbay.jpg';

const CampBay = () => (
  <Layout>
    <SEO title="Page two" />
    <img src={Cover} />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CampBay
