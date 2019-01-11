import React from 'react'
import Footer from '../components/page-sections/footer';
import styled from '@emotion/styled';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Cover from '../images/covers/thelodge.jpg';
import Lodge1 from '../images/gallery/lodge/lodge1.jpg';

import Lodge3 from '../images/gallery/lodge/lodge3.jpg';
import Lodge4 from '../images/gallery/lodge/lodge4.jpg';
import Lodge5 from '../images/gallery/lodge/lodge5.jpg';

const Single = styled.article`
    background-color: #f5f7f7;
`
const SingleContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
  `


const Lodge = () => (
  <Layout>
    <SEO title="Page two" />
    <img src={Cover} alt="Living Waters Lodge view from the beach" style={{verticalAlign: "middle"}}/>
    <Single>
      <SingleContainer className="w-90 ph3-l pv5 w-60-l">
      <h2>Your Caribbean Dream</h2>
      <p className="font">Our newly build 4100 square foot beautiful home sits right on the pristine beach of Camp Bay. Offering you every comfort you are used to when home. Take a dip in our infinity swimming pool during those tropical mornings. Or just take the kayaks out to the reef for a breathtaking snorkeling experience right after you wake up.</p>
      <p className="font">There's no other location on Roatan that is so peaceful and so away from the maddening crowds, and yet, Living Waters will surround you with first-class luxury!</p>
      </SingleContainer>
    </Single>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Bedrooms</h2>
            <p className="font b">4 individual bedrooms can accommodate a total of 10 persons</p>
            <ul>
            <li className="font">Bedroom 1: king bed with double sink & private bath</li>
            <li className="font">Bedroom 2: double beds with one sink & private bath</li>
            <li className="font">Bedroom 3: king bed with shared double sink bathroom</li>
            <li className="font">Bedroom 4: queen bed with shared double sink bathroom </li>
            </ul>
          </div>
          <div className="w-100 w-50-l">
            <img className="border" src={Lodge1} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-reverse-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Amenities</h2>
            <p className="font b">Individually Controlled Air-Conditioning in all the Bedrooms, Living Room and Dining Room aswell as a ceiling fan/light combination in each bedroom</p>
            <ul>
            <li className="font">Washer And Dryer</li>
            <li className="font">Ironing Board and Iron</li>
            <li className="font">High Speed Internet (Netflix, Youtube, etc)</li>
            <li className="font">Beach Towels, Luxury Bed Linens & Luxury Bath Towels</li>
            <li className="font">Smart TVs - In all bedrooms and living room</li>
            </ul>
          </div>
          <div className="w-100 w-50-l">
            <img className="border" src={Lodge5} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Outside Area</h2>
            <p className="font b">Our large travertine deck with dining table and seating area is a great place to enjoy sunset.</p>
            <ul>
            <li className="font">Lounge chairs in front of the pool and jacuzzi</li>
            <li className="font">"Kitchenaid" Gas-BBQ </li>
            <li className="font">Beach Palapa</li>
            <li className="font">2 single and 2 double kayaks</li>
            <li className="font">Snorkeling equipment for adults and children</li>
            </ul>
          </div>
          <div className="w-100 w-50-l">
            <img className="border" src={Lodge4} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <article className="w-90 w-75-l center pv5-ns pv4">
      <div className="w-100 flex flex-row-reverse-l justify-between-l flex-column">
          <div className="w-100 w-40-l">
            <h2>Service</h2>
            <p className="font b">We are here to make your vacation worry free!</p>
            <ul>
            <li className="font">24h Concierge Service</li>
              <p className="font">Arrangements can be made for our guests for diving, kitesurfing, sight-seeing and tours, hiking, fishing, or for whatever you want.</p>
            <li className="font">Transportation</li>
              <p className="font">Upon arrival, we will escort you free of charge to Eldon’s grocery store to purchase anything you might need, and then on to Living Waters.</p>
              <li className="font">Housekeeping Service Available</li>
            </ul>
          </div>
          <div className="w-100 w-50-l">
            <img className="border" src={Lodge3} alt="Camp Bay Roatan Living Waters Rooms"/>
          </div>
      </div>
    </article>
    <Single>
      <SingleContainer className="w-90 ph3-l pv5 w-60-l">
      <h2>Rates</h2>
      <p className="font">For booking enquiries, please kindly contact our reservation team by email at: <a className="link" href="mailto:livingwatersroatan@gmail.com">livingwatersroatan@gmail.com</a></p>
                  <div className="flex pv2 justify-around">
                    <div className="font">1-4 People</div>
                    <div className="font" >$400/Night</div>
                  </div> 
                  <div className="flex pb4 justify-around">
                    <div className="font">Additional Person</div>
                    <div className="font">$50/Night</div>
                    </div> 
      <h2>Special Offers</h2>
      <p className="font">Please contact us for special pricing during the off season or during Christmas, New Year’s, and Easter!</p>
      </SingleContainer>
    </Single>

    <Footer />
  </Layout>
)

export default Lodge
