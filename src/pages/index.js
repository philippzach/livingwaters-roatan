import React from 'react'

import Slider from '../components/slider';
import Map from '../components/map';
import Cta from '../components/contactcta';
import FeaturesTop from '../components/featurestop';
import Features from '../components/features';
import Tours from '../components/tours';
import Help from '../components/help';
import Youtube from '../components/youtube';
import Price from '../components/price';
import Wrapper from '../components/wrapper';
import Layout from '../components/layout'
import Google from '../components/googlemaps';
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider />
      <Wrapper>
          <Map />
      </Wrapper>
      <Cta /> 
      <FeaturesTop />
      <Wrapper>
       <Features />
      </Wrapper>
      <Help /> 
      <Wrapper>
        <Tours />
      </Wrapper>
      <Youtube />
      <Wrapper>
        <Price />
      </Wrapper>
      <Google />
  </Layout>
)

export default IndexPage
