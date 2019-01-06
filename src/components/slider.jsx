import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Cover from '../images/slider/1.jpg';
import Cover2 from '../images/slider/2.jpg';

const content = [
    {
        title: "Living Waters Vacation Home",
        description: "Luxurious, Private, Beachfront & New Construction",
        button: "CTA one",
        image: `${Cover}`,
    },
    {
        title: "Eco-Luxury",
        description: "Pristine Beach, Infinity Pool, UV-Filtered Jacuzzi & Superb Coral Reef",
        button: "CTA one",
        image: `${Cover2}`,
    }
]

const SlideShow = () => (
    <Slider>
{content.map((item, index) => (
	<div
		key={index}
		style={{ background: `url('${item.image}') no-repeat center center` }}
	>
		<div className="center">
			<h1>{item.title}</h1>
			<p>{item.description}</p>
			<button>{item.button}</button>
		</div>
	</div>
))}
</Slider>
)

export default SlideShow;

