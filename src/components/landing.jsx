import React from 'react';
import './landing.css'
import styled from '@emotion/styled';
import Image1 from '../images/collage/big.jpg';
import Image2 from '../images/collage/kite.jpg';
import Image3 from '../images/collage/bird.jpg';
import Image4 from '../images/collage/kid.jpg';
import Image5 from '../images/collage/dog.jpg';

const ImageOne = styled.span`
    background: url(${Image1});
    background-position: 50% 50%;
    background-size: cover;
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
</>
);

export default Landing