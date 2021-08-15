import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact us - Lving Waters Camp Bay" description="Contact us for reservations, bookings or special offers" />
    <Img fluid={data.covercontact.childImageSharp.fluid} style={{verticalAlign: "middle"}} alt=""/>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>General Information</h2>
              <p className="font b">
              Lot #6, Camp Bay Beach<br/>
              Roatan<br/>
              Bay Islands, Honduras
              </p>
              <h2 className="lh-copy">24 Hour Concierge Service &<br/>
              Reservations
              </h2>
              <p className="font b">
              <strong>Property Manager</strong><br/>
              Sherri Visker<br/>
              <a className="link" href="mailto:Eastendmanagers@gmail.com">
              Eastendmanagers@gmail.com</a><br/>
              +504-9967-3803
              </p>
              <strong>Owner</strong><br/>
              <p className="font b">
              Blaine Bell<br/>
              <a className="link" href="mailto:livingwatersroatan@gmail.com" 
                    cc="desyardis@gmail.com">livingwatersroatan@gmail.com</a><br/>
              +1-814-504-7656
              </p>
          </div>
          <div className="w-100 w-50-l">
          <iframe title="Google Maps Roatan Camp Bay" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d8402.12085590168!2d-86.30135213920904!3d16.42760046189704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x8f69e89e2d14803f%3A0xc4163ee32855338f!2sRoat%C3%A1n+Airport%2C+Coxen+Hole%2C+Honduras!3m2!1d16.317156999999998!2d-86.5230222!4m3!3m2!1d16.428948!2d-86.291957!5e1!3m2!1sde!2sat!4v1480481645873" width="582px" height="515px" frameborder="0" style={{border:"0"}}></iframe>
          </div>
      </div>
    </article>
  </Layout>
)

export default Contact

export const query = graphql`
  query {
    covercontact: file(relativePath: { eq: "covers/landingpage2.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1050
            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
  }`