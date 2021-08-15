import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Tachyons from 'tachyons/css/tachyons.min.css';
import styled from '@emotion/styled';

import Header from './header'
import './layout.css'

const MainContainer = styled.div`
@media only screen and (min-width: 48.0625em)
.container {
    overflow: visible;
}

.container {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    position: relative;
}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <MainContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
          {children}
      </MainContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
