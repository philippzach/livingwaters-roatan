import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Cover from '../images/slider/1.jpg';

const content = [
    {
        title: "First Title",
        description: "First Descripton",
        button: "CTA one",
        image: {Cover},
    },
    {
        title: "First Title",
        description: "First Descripton",
        button: "CTA one",
        image: "0"
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

