import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Footer from '../components/page-sections/footer';
import SEO from '../components/seo'
import Landing from '../components/page-sections/landing';

import Cover from '../images/covers/landingpage.jpg';
import Cover2 from '../images/covers/landingpage2.jpg';
import Cover3 from '../images/covers/landingpage3.jpg';
import Cover4 from '../images/covers/landingpage4.jpg';
import Cover5 from '../images/covers/landingpage5.jpg';

const images = [
  /* {
    original: `${query.cover1.childImageSharp.fluid}`
    
  }, */
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
];

const IndexPage = ({ data }) => (
      <Layout>
        <SEO title="Living Waters - Luxury Vacation Villa Camp Bay" description="Beachfront Vacation Rental in Camp Bay Beach Roatan" keywords={[`campbay`, `vacation`, `rental`]} />
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
          <Landing data={data} />
          
          <Footer />
      </Layout>
    )


export default IndexPage

export const query = graphql`
  query {
    cover1: file(relativePath: { eq: "collage/big.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1050
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    cover2: file(relativePath: { eq: "collage/kite.jpg" }) {

        childImageSharp {
          fluid(
            maxWidth: 650
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      
    }
    cover3: file(relativePath: { eq: "collage/bird.jpg" }) {
     
        childImageSharp {
          fluid(
            maxWidth: 650
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      
    }
    cover4: file(relativePath: { eq: "collage/kid.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 650
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      
    }
    cover5: file(relativePath: { eq: "collage/dog.jpg" }) {
            childImageSharp {
              fluid(
                maxWidth: 650
                traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
              ) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
    }
  }
`