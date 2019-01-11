import React from 'react'
import styled from '@emotion/styled';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

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
import Footer from '../components/page-sections/footer';
import SEO from '../components/seo'
import Landing from '../components/page-sections/landing';

import Cover from '../images/covers/landingpage.jpg';
import Cover2 from '../images/covers/landingpage2.jpg';
import Cover3 from '../images/covers/landingpage3.jpg';
import Cover4 from '../images/covers/landingpage4.jpg';
import Cover5 from '../images/covers/landingpage5.jpg';

const CustomContainer = styled.div`
margin: 0px auto;
max-width: 1260px;
`
const images = [
  {
    original: `${Cover}`
    
  },
  {
    original: `${Cover2}`
    
  },
  {
    original: `${Cover3}`
    
  },
  {
    original: `${Cover4}`
    
  },
  {
    original: `${Cover5}`
    
  }
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ImageGallery items={images} 
    showBullets={true} 
    showThumbnails={false} 
    showPlayButton={false}
    showNav={false}
    showFullscreenButton={false}  
    autoPlay={true}
    slideDuration={1500}
    slideInterval={4000}
    />
      <Landing />
      <Footer />
  </Layout>
)

export default IndexPage

{/* <Cta /> 
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
      <Google /> */}