import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Footer from '../components/page-sections/footer';

import Layout from '../components/layout'
import SEO from '../components/seo'

import Cover1 from '../images/gallery/galleryall/gallery-1.jpg';
import Cover2 from '../images/gallery/galleryall/gallery-2.jpg';
import Cover3 from '../images/gallery/galleryall/gallery-3.jpg';
import Cover4 from '../images/gallery/galleryall/gallery-4.jpg';
import Cover5 from '../images/gallery/galleryall/gallery-5.jpg';
import Cover6 from '../images/gallery/galleryall/gallery-6.jpg';
import Cover7 from '../images/gallery/galleryall/gallery-7.jpg';
import Cover8 from '../images/gallery/galleryall/gallery-8.jpg';
import Cover9 from '../images/gallery/galleryall/gallery-9.jpg';
import Cover10 from '../images/gallery/galleryall/gallery-10.jpg';
import Cover11 from '../images/gallery/galleryall/gallery-11.jpg';
import Cover12 from '../images/gallery/galleryall/gallery-12.jpg';
import Cover13 from '../images/gallery/galleryall/gallery-13.jpg';
import Cover14 from '../images/gallery/galleryall/gallery-14.jpg';
import Cover15 from '../images/gallery/galleryall/gallery-15.jpg';
import Cover16 from '../images/gallery/galleryall/gallery-16.jpg';
import Cover17 from '../images/gallery/galleryall/gallery-17.jpg';
import Cover18 from '../images/gallery/galleryall/gallery-18.jpg';
import Cover19 from '../images/gallery/galleryall/gallery-19.jpg';
import Cover20 from '../images/gallery/galleryall/gallery-20.jpg';

import Cover22 from '../images/gallery/galleryall/gallery-22.jpg';
import Cover23 from '../images/gallery/galleryall/gallery-23.jpg';
import Cover24 from '../images/gallery/galleryall/gallery-24.jpg';
import Cover25 from '../images/gallery/galleryall/gallery-25.jpg';
import Cover26 from '../images/gallery/galleryall/gallery-26.jpg';
import Cover27 from '../images/gallery/galleryall/gallery-27.jpg';
import Cover28 from '../images/gallery/galleryall/gallery-28.jpg';
import Cover29 from '../images/gallery/galleryall/gallery-29.jpg';
import Cover30 from '../images/gallery/galleryall/gallery-30.jpg';
import Cover31 from '../images/gallery/galleryall/gallery-31.jpg';

const images = [
    {
      original: `${Cover1}`
    },
    {
      original: `${Cover2}`
    },
    {
      original: `${Cover3}`
    },
    {
        original: `${Cover31}`
    },
    {
        original: `${Cover22}`
    },
    {
        original: `${Cover23}`
    },
    {
        original: `${Cover24}`
    },
    {
        original: `${Cover4}`
    },
    {
        original: `${Cover5}`
    },
    {
        original: `${Cover6}`
    },
    {
        original: `${Cover7}`
    },
    {
        original: `${Cover8}`
    },
    {
        original: `${Cover9}`
    },
    {
        original: `${Cover25}`
    },
    {
        original: `${Cover26}`
    },
    {
        original: `${Cover27}`
    },
    {
        original: `${Cover10}`
    },
    {
        original: `${Cover11}`
    },
    {
        original: `${Cover12}`
    }
    ,
    {
        original: `${Cover13}`
    }
    ,
    {
        original: `${Cover28}`
    },
    {
        original: `${Cover29}`
    },
    {
        original: `${Cover30}`
    },
    {
        original: `${Cover14}`
    },
    {
        original: `${Cover15}`
    },
    {
        original: `${Cover16}`
    },
    {
        original: `${Cover17}`
    },
    {
        original: `${Cover18}`
    },
    {
        original: `${Cover19}`
    },
    {
        original: `${Cover20}`
    }
  ]

const Gallery = () => (
  <Layout>
    <SEO title="Gallery - Living Waters Camp Bay" description="A selction of pictures made exclusively in Camp Bay Beach on Roatan Island, Honduras" />
    <ImageGallery items={images}
    showFullscreenButton={false}
    showPlayButton={false}
    showThumbnails={false}   />
    <Footer />
  </Layout>
)

export default Gallery
