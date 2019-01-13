import React from 'react';
import './landing.css'
import styled from '@emotion/styled';
import Img from 'gatsby-image'


// import Image1 from '../../images/collage/big.jpg';
/* import Image2 from '../../images/collage/kite.jpg';
import Image3 from '../../images/collage/bird.jpg';
import Image4 from '../../images/collage/kid.jpg';
import Image5 from '../../images/collage/dog.jpg' */;


const HelpLink = styled.a`
color: rgb(15, 123, 188);
text-decoration: underline;
`

const Landing = ({ data }) => (
    <>
<section className="intro">
    <div className="row">
        <article className="comment">
        <blockquote className="quote">
            <p className="saying">
            If anyone thirsts, let him a come to me and drink.
            </p>
            <cite className="by">
            Jesus - The Source of Living Water - John 7:37 
            </cite>
        </blockquote>
            <p className="expl">
            Living Waters is a brand new, high-end, luxurious, private, beachfront vacation home in Roatan! This magnificent two-story beachfront villa sits just steps from the Caribbean Sea in Camp Bay Beach, home of the most beautiful natural beach in Roatan, Honduras and also just a short swim to the second largest coral barrier reef in the world!
            </p>
        </article>
    </div>
</section>
<section className="grid-photo">
    <div className="cf">
        <div>
            <div className="fl w-100 w-two-thirds-ns">
                <Img fluid={data.cover1.childImageSharp.fluid} />
            </div>
            <div className="fl w-100 w-third-ns">
                
                <Img fluid={data.cover2.childImageSharp.fluid} />
            </div>
        </div>
        <div className="w-100 dib-ns">
            <div className="fl w-50 w-third-ns">
                {/* <img className="mb0 gridfix"  src={Image3} /> */}
                <Img fluid={data.cover3.childImageSharp.fluid} />
            
            </div>
            <div className="fl w-50 w-third-ns">
                {/* <img className="mb0 gridfix"  src={Image4} /> */}
                <Img fluid={data.cover4.childImageSharp.fluid} />
                
            </div>
            <div className="fl w-100 w-third-ns">
                {/* <img className="mb0 gridfix"  src={Image5} /> */}
                <Img fluid={data.cover5.childImageSharp.fluid} />
                
            </div>
        </div>
    </div>
</section>
<div className="helpbackground">
<article className="split">
    <div className="row flex flex-column flex-row-ns">
        <div className="w-100 w-50-ns ph2 ph3-ns">
            <h2>Our Commitment</h2>
            <p className="font pt3-ns">We strive to provide our guests a luxurious, once in a lifetime vacation that is immersed in the local culture of Camp Bay, in a way that preserves and sustains the beautiful, pristine environment of this truly special area of Roatan.</p>
            <p className="font ">We are absolutely committed to sustaining and protecting the natural environment and precious biodiversity of Camp Bay, while respecting and fully supporting the local culture, traditions, community, and hospitality.</p>
        </div>
        <div className="w-100 w-50-ns ph2 ph3-ns pt5-ns">
        <p className="font">And we are just as committed to you, our guests, in creating the most incredible, relaxing, pampered, worry-free beach vacation experience, and to giving you and your loved ones cherished memories of your stay here, and a “thirst” that once again calls for a return to Living Waters!</p>
            <p className="font">As part of our commitment to others and to the environment, we donate a minimum of 1% of our yearly income to <HelpLink href="https://www.livingwatersfortheworld.org">Living Waters for the World</HelpLink>, a global ministry that provides sustainable clean water and fosters long-term, mutually beneficial relationships between volunteers and communities in need.</p>
           
        </div>
    </div>
</article>
</div>
</>
);

export default Landing

   {/* <img src={Image1} /> */}
            {/* <StaticQuery
                    query={graphql`
                            query {
                                cover1: file(relativePath: { eq: "collage/big.jpg" }) {
                                    childImageSharp {
                                        fluid(
                                            maxWidth: 600
                                            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
                                        ) {
                                            ...GatsbyImageSharpFluid_tracedSVG
                                        }
                                }
                                }
                            }
                            `}
                    render={data => <Img  fluid={data.cover1.childImageSharp.fluid} />}
                /> */}

                {/* <img className="mb0 gridfix"  src={Image2} /> */}
            {/* <StaticQuery
                    query={graphql`
                            query {
                                cover2: file(relativePath: { eq: "collage/kite.jpg" }) {
                                    childImageSharp {
                                        fluid(
                                            maxWidth: 600
                                            traceSVG: { background: "#fff", color: "rgb(15, 123, 188)" }
                                        ) {
                                            ...GatsbyImageSharpFluid_tracedSVG
                                        }
                                }
                                }
                            }
                            `}
                    render={data => <Img  fluid={data.cover2.childImageSharp.fluid} />}
                /> */}