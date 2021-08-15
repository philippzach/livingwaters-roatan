import React from 'react'
import styled from '@emotion/styled';
import Footer from '../components/page-sections/footer';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../images/menu.pdf';

// import Cover from '../images/covers/dining.jpg';
// import Dine1 from '../images/gallery/dining/dining1.jpg';
// import Dine2 from '../images/gallery/dining/dining2.jpg';
// import Dine3 from '../images/gallery/dining/dining3.jpg';

const Single = styled.article`
    background-color: #f5f7f7;
`
const SingleContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
  `


const Dining = ({ data }) => (
  <Layout>
    <SEO title="Dining - Living Waters Camp Bay" description="Exclusive Dining at Living Waters Camp Bay with your private chef" />
    <Img fluid={data.coverdining.childImageSharp.fluid} style={{verticalAlign: "middle"}}/>
    <Single>
      <SingleContainer className="w-90 ph3-l pv5 w-60-l">
      <p className="font">Along with local restaurants like La Sirena and Camp Bay Lodge located within short walking distance, arrangements can be made for a private chef to prepare your island favorites while staying at Living Waters!</p>
      <p className="font">Our Kitchen is equipped with all the luxury you are used to, right there on your private Caribbean beach!</p>
      </SingleContainer>
    </Single>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Fully Equiped Kitchen</h2>
            <p className="font b">At Living Waters we have an indoor & outdoor dining table with 8 seats and a kitchen island with 5 barstools.</p>
            <ul>
            <li className="font">Automatic Drip Coffee Maker</li>
            <li className="font">Stove/Oven Combination</li>
            <li className="font">Large Refrigerator/Freezer with Ice Maker </li>
            <li className="font">Microwave Oven & Pizza Oven </li>
            <li className="font">Toaster & Blender</li>
            </ul>
          </div>
          <div className="w-100 w-50-l">
            <Img className="border" fluid={data.dining3.childImageSharp.fluid} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-reverse-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Private Chef</h2>
            <p className="font">Our private chef is $70/day for up to 5 people and $100/day for over 5 people, not including the cost of groceries. If you would like, we will stock the fridge with what our chef(s) will need for the week.</p>
            <a className="font link" href={Menu}>Download our Menu here</a>
          </div>
          <div className="w-100 w-50-l">
            <Img className="border" fluid={data.dining2.childImageSharp.fluid} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Local Restaurants</h2>
            <p className="font b">La Sirena and Camp Bay Lodge are steps away and offer amazing food, atmosphere, ice cold beer and rum punch, and the best key lime pie on the island.</p>
          </div>
          <div className="w-100 w-50-l">
            <Img className="border" fluid={data.dining3.childImageSharp.fluid} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <Footer />
  </Layout>
)

export default Dining

export const query = graphql`
  query {
    coverdining: file(relativePath: { eq: "covers/dining.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1050
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    dining1: file(relativePath: { eq: "gallery/dining/dining1.jpg" }) {

        childImageSharp {
          fluid(
            maxWidth: 650
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      
    }
    dining2: file(relativePath: { eq: "gallery/dining/dining2.jpg" }) {
     
        childImageSharp {
          fluid(
            maxWidth: 650
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      
    }
    dining3: file(relativePath: { eq: "gallery/dining/dining3.jpg" }) {
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