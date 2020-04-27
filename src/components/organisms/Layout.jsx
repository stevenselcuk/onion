import React from 'react'
import PropTypes from 'prop-types'
import posed, { PoseGroup } from 'react-pose'
import shortid from 'shortid'
import { fadeIn, moveInBottom } from '../atoms/Transitions'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.css'

// https://github.com/welldone-software/why-did-you-render
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js')
  whyDidYouRender(React)
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default function Layout({ children, location }) {
  const timeout = 200
  const RoutesContainer = posed.div(fadeIn)
  const AnimatedContainer = posed.div(moveInBottom)
  const isHomepage =
    location.pathname === '/' ||
    location.pathname === '/offline-plugin-app-shell-fallback/'

  return (
    <>
      <Navbar />
      <PoseGroup animateOnMount={process.env.NODE_ENV !== 'test' && true}>
        <RoutesContainer
          key={shortid.generate()}
          delay={timeout}
          delayChildren={timeout}
          className={styles.screen}
        >
          <AnimatedContainer className={styles.wrapper}>
            {children}
          </AnimatedContainer>
        </RoutesContainer>
      </PoseGroup>
      <Footer />
    </>
  )
}
