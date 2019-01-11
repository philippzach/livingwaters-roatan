import React from 'react';
import './landing.css'
import styled from '@emotion/styled';
import Image1 from '../../images/collage/big.jpg';
import Image2 from '../../images/collage/kite.jpg';
import Image3 from '../../images/collage/bird.jpg';
import Image4 from '../../images/collage/kid.jpg';
import Image5 from '../../images/collage/dog.jpg';

const ImageOne = styled.span`
    background: url(${Image1});
    background-position: 50% 50%;
    background-size: cover;
`

const HelpLink = styled.a`
color: rgb(15, 123, 188);
text-decoration: underline;
`

const Landing = () => (
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
            <img className="mb0 gridfix"  src={Image1} />
        </div>
        <div className="fl w-100 w-third-ns">
            <img className="mb0 gridfix"  src={Image2} />
        </div>
        </div>
        <div className="inline-flex">
        <div className="fl w-50 w-third-ns">
            <img className="mb0 gridfix"  src={Image3} />
        </div>
        <div className="fl w-50 w-third-ns">
            <img className="mb0 gridfix"  src={Image4} />
        </div>
        <div className="fl w-50 w-third-ns">
            <img className="mb0 gridfix"  src={Image5} />
        </div>
        </div>
    </div>
</section>
<div className="helpbackground">
<article className="split">
    <div className="row flex flex-column flex-row-ns">
        <div className="w-100 w-50-ns ph2 ph3-ns">
            <h2>Our Commitment</h2>
            <p className="font pt3-ns">We strive to provide a luxurious, authentic and enriching travel experiences in an environmentally sensitive, sustainable and culturally rich manner.</p>
            <p className="font ">We are committed to preserving and protecting the natural splendor and precious biodiversity of Camp Bay, respecting and supporting the local culture, hospitality, traditions and community.</p>
        </div>
        <div className="w-100 w-50-ns ph2 ph3-ns pt5-ns">
        <p className="font">Apart from that, we donate 1% of our yearly income to <HelpLink href="https://www.livingwatersfortheworld.org" >Living Waters for the World</HelpLink>, a global ministry that provides sustainable clean water and fosters long-term, mutually beneficial relationships between volunteers and communities in need.</p>
            <p className="font">As guest in Camp Bay, we are committed to preserving and protecting the ecosystem and being a responsible member of both our local and global communities. We will deal fairly and honestly with our staff and suppliers in an atmosphere of mutual trust, accountability and reward.</p>
           
        </div>
    </div>
</article>
</div>
</>
);

export default Landing