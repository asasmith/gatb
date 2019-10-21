import React from 'react'
// import Header from './header'
import './layout.css'

import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Merriweather:400,700,900);
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800);

  :root {
    --bodyFont: 'Open Sans', sans-serif;
    --headerFont: 'Merriweather', serif;
  }

  body {
    font-family: var(--bodyFont);
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--headerFont);
  }
`

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    {/* <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} /> */}
    <GlobalStyle />
    <div >{children}</div>
    <footer >
      <div >
        <div >
          &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
          &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
          {` `}
          &amp;
          <span>&#9829;</span>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
