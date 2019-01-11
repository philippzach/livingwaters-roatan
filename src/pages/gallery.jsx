import React from 'react'
import { Link } from 'gatsby'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Footer from '../components/page-sections/footer';

import Layout from '../components/layout'
import SEO from '../components/seo'

import Cover1 from '../images/gallery/campbay/campbay1.jpg';
import Cover2 from '../images/gallery/campbay/campbay2.jpg';
import Cover3 from '../images/gallery/campbay/campbay3.jpg';
import Cover4 from '../images/gallery/campbay/campbay4.jpg';
import Cover5 from '../images/gallery/lodge/lodge1.jpg';
import Cover6 from '../images/gallery/lodge/lodge2.jpg';
import Cover7 from '../images/gallery/lodge/lodge3.jpg';
import Cover8 from '../images/gallery/lodge/lodge4.jpg';
import Cover9 from '../images/gallery/lodge/lodge5.jpg';
import Cover10 from '../images/gallery/dining/dining1.jpg';
import Cover11 from '../images/gallery/dining/dining2.jpg';
import Cover12 from '../images/gallery/dining/dining3.jpg';

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
        original: `${Cover10}`
    },
    {
        original: `${Cover11}`
    },
    {
        original: `${Cover12}`
    }
  ]

const Gallery = () => (
  <Layout>
    <SEO title="Page two" />
    <ImageGallery items={images}
    showFullscreenButton={false}
    showPlayButton={false}
    showThumbnails={false}   />
    <Footer />
  </Layout>
)

export default Gallery
