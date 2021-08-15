import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Cover from '../images/covers/landingpage.jpg';
import Cover2 from '../images/covers/landingpage2.jpg';
import './slider.css';

const content = [
    {
        title: "Living Waters Camp Bay",
        description: "Luxurious, Private, Beachfront & New Construction",
        button: "Book Now",
        image: `${Cover}`,
    },
    {
        title: "Eco-Luxury",
        description: "Pristine Beach, Infinity Pool, UV-Filtered Jacuzzi & Superb Coral Reef",
        button: "Book Now",
        image: `${Cover2}`
    }
]

const SlideShow = () => (
    <Slider
    >
{content.map((item, index) => (
	<div>
    <img
        src={item.image}
		key={index}
		// style={{ background: `url('${item.image}') no-repeat center center` }}
	/>
	</div>
))}
</Slider>
)

export default SlideShow;
/* 
<div className="headline">
			<h1>{item.title}</h1>
			<p>{item.description}</p>
            <div className="w-third">
			<a className="button -blue">{item.button}</a>
            </div>
		</div> */