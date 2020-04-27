import React, { useEffect, useRef, useState } from 'react'
import posed from 'react-pose'
import { Link } from 'gatsby'
import styles from './Navbar.module.css'
import { moveInBottom } from '../atoms/Transitions'
import ThemeSwitch from '../molecules/ThemeSwitch'
import { ReactComponent as Logo } from '../../images/logo-line.svg'
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
        <Logo className={styles} />
        <span className={styles.logotitle}>{basics.label.toLowerCase()}</span>
      </Link>
      <div className={styles.menu}>
        <Link to="/how-to/" activeClassName={activeClassName}>
          How to
        </Link>
        <Link to="/support/" activeClassName={activeClassName}>
          Support
        </Link>
        <Link to="/privacy/" activeClassName={activeClassName}>
          Privacy Policy
        </Link>
        <Link to="/license/" activeClassName={activeClassName}>
          License
        </Link>
        <Link to="/roadmap/" activeClassName={activeClassName}>
          Roadmap
        </Link>
        <Link to="/changelog/" activeClassName={activeClassName}>
          Changelog
        </Link>
        <ThemeSwitch />
      </div>
    </Animation>
  )
}

export default Navbar
