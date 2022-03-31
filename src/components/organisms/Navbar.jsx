import React, { useEffect, useRef, useState } from 'react'
import posed from 'react-pose'
import { Link } from 'gatsby'
import styles from './Navbar.module.css'
import { moveInBottom } from '../atoms/Transitions'
import Logo from '../../images/AppIcon.png'
import { useApp } from '../../hooks/use-app'

const activeClassName = 'active'

const Navbar = () => {
  const { basics } = useApp()
  const Animation = posed.div(moveInBottom)

  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)


    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <Animation className={styles.navbar}>
      <Link
        to="/"
        className={styles.logolink}
        activeClassName={activeClassName}
      >
        <img className={styles.logo} src={Logo} />
        <span className={styles.logotitle}>{basics.label.toLowerCase()}</span>
      </Link>
      <div className={styles.menu}>
        <Link to="/how-to/" activeClassName={activeClassName}>
          How to
        </Link>
        <Link to="/support/" activeClassName={activeClassName}>
          Support
        </Link>
        <Link to="/roadmap/" activeClassName={activeClassName}>
          Roadmap
        </Link>
        <Link to="/changelog/" activeClassName={activeClassName}>
          Changelog
        </Link>
        <Link to={basics.storeUrl} activeClassName={activeClassName} className={styles.coolButton}>
          Get Checklist
        </Link>
        
      </div>
    </Animation>
  )
}

export default Navbar
