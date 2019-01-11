import React from 'react'
import styled from '@emotion/styled';
import Footer from '../components/page-sections/footer';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Cover from '../images/covers/campbay.jpg';
import Bay1 from '../images/gallery/campbay/campbay1.jpg';
import Bay2 from '../images/gallery/campbay/campbay2.jpg';
import Bay3 from '../images/gallery/campbay/campbay3.jpg';
import Bay4 from '../images/gallery/campbay/campbay4.jpg';

const Single = styled.article`
    background-color: #f5f7f7;
`
const SingleContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
  `

const CampBay = () => (
  <Layout>
    <SEO title="Page two" />
    <img src={Cover} style={{verticalAlign: "middle"}}/>
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
            <img className="border" src={Bay1} alt="Camp Bay Roatan Living Waters Rooms"/>
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
            <img className="border" src={Bay2} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Fishing & Sightseeing</h2>
            <p className="font b">Local guides can pick you up from our private dock for absolutely great fishing or for a private sight seeing tour of Roatan or the other Bay Islands.</p>
          </div>
          <div className="w-100 w-50-l">
            <img className="border" src={Bay4} alt="Camp Bay Roatan Living Waters Rooms"/>
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
            <img className="border" src={Bay3} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <Footer />
  </Layout>
)

export default CampBay
