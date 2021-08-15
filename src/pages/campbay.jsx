import React from 'react'
import styled from '@emotion/styled';
import Footer from '../components/page-sections/footer';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout'
import SEO from '../components/seo'
// import Cover from '../images/covers/campbay.jpg';
// import Bay1 from '../images/gallery/campbay/campbay1.jpg';
// import Bay2 from '../images/gallery/campbay/campbay2.jpg';
// import Bay3 from '../images/gallery/campbay/campbay3.jpg';
// import Bay4 from '../images/gallery/campbay/campbay4.jpg';

const Single = styled.article`
    background-color: #f5f7f7;
`
const SingleContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
  `

const CampBay = ({ data }) => (
  <Layout>
    <SEO title="Camp Bay - Living Waters Camp Bay" description="Things to do in Camp Bay and around Roatan Island" />
    <Img fluid={data.coverbay.childImageSharp.fluid} style={{verticalAlign: "middle"}}/>
    <Single>
      <SingleContainer className="w-90 ph3-l pv5 w-60-l">
      <p className="font">At Camp Bay, you will find an abundance of activities from kitesurfing, snorkeling and bird watching to diving and paddle boarding. </p>
      <p className="font">Here you are not just observing nature, you are in it. Put on a snorkeling mask and witness underwater life at a coral reef firsthand, encountering such marine life as sea turtles, rays, reef sharks and a dazzling array of tropical fish. Or you can explore the spectacular lagoon by kayak or paddleboard. Or simply take a swim or relax on the beach or by the pool.</p>
      </SingleContainer>
    </Single>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Kitesurfing & Watersports</h2>
            <p className="font b">World class kite surfing instruction by Kitesurf Roatan, just down the beach. One and two man kayaks are available at the house for our guests to enjoy for free!</p>
          </div>
          <div className="w-100 w-50-l">
            <Img className="border" fluid={data.bay1.childImageSharp.fluid} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-reverse-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Diving & Snorkeling</h2>
            <p className="font b">Camp Bay provides pristine underwater sites to be enjoyed at the undeveloped East End of Roatan, and there is world-class diving instruction by "Dive Pangea Roatan" available only a few lots down the beach</p>
          </div>
          <div className="w-100 w-50-l">
            <Img className="border" fluid={data.bay2.childImageSharp.fluid} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Fishing & Sightseeing</h2>
            <p className="font b">Local guides can pick you up from our private dock for absolutely great fishing or for a private sight seeing tour of Roatan or the other Bay Islands.</p>
            <ul>
              <li className="font">
              Handford Tours
              </li>
              <li className="font">
              Roatan Salty Life
              </li>
            </ul>
          </div>
          <div className="w-100 w-50-l">
            <Img className="border" fluid={data.bay4.childImageSharp.fluid} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-reverse-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Hiking</h2>
            <p className="font b">On the East End of Roatan, there are a lot of hiking options available to explore. We recommended you hike with one of our guides as trails may not be very well marked to the unfamiliar eye.</p>
          </div>
          <div className="w-100 w-50-l">
            <Img className="border" fluid={data.bay3.childImageSharp.fluid} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Around Roatan</h2>
            <ul>
              <li>
              Zip Line Adventures
              </li>
              <li>
              Dolphin Encounter at Anthony’s Key
              </li>
              <li>
              Golf at Pristine Bay
              </li>
              <li>
              Johnson’s Monkey and Sloth Hangout
              </li>
            </ul>
          </div>
          <div className="w-100 w-50-l">
            <Img className="border" fluid={data.bay4.childImageSharp.fluid} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <div className="mb5" style={{ position: "relative", padding: "50% 0 0"}}>
    <iframe title="Camp Bay Roatan Activities Video" style={{position:"absolute",top:"0",left:"0", width:"100%", height:"100%"}} src="https://player.vimeo.com/video/268285971" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
    <Footer />
  </Layout>
)

export default CampBay

export const query = graphql`
  query {
    coverbay: file(relativePath: { eq: "covers/campbay.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1050
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    bay1: file(relativePath: { eq: "gallery/campbay/campbay1.jpg" }) {

        childImageSharp {
          fluid(
            maxWidth: 650
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      
    }
    bay2: file(relativePath: { eq: "gallery/campbay/campbay2.jpg" }) {
     
        childImageSharp {
          fluid(
            maxWidth: 650
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      
    }
    bay3: file(relativePath: { eq: "gallery/campbay/campbay3.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 650
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      
    }
    bay4: file(relativePath: { eq: "gallery/campbay/campbay4.jpg" }) {
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