import React from 'react'
import styled from '@emotion/styled';

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
import Footer from '../components/footer';
import SEO from '../components/seo'

const CustomContainer = styled.div`
margin: 0px auto;
max-width: 1260px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider />
      <Wrapper>
          <Map />
      </Wrapper>
      <Cta /> 
      <FeaturesTop />
      <CustomContainer>
       <Features />
      </CustomContainer>
      <Help /> 
      <Wrapper>
        <Tours />
      </Wrapper>
      <Youtube />
      <Wrapper>
        <Price />
      </Wrapper>
      <Google />
      <Footer />
  </Layout>
)

export default IndexPage
