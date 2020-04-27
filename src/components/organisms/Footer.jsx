import React, { memo } from 'react'
import PropTypes from 'prop-types'
import LogoUnit from '../molecules/LogoUnit'
import Networks from '../molecules/Networks'
import styles from './Footer.module.css'
import { useMeta } from '../../hooks/use-meta'


const FooterMarkup = ({ meta, year }) => (
  <footer className={`h-card ${styles.footer}`}>
    <LogoUnit minimal />
    <Networks small />
    <p className={styles.actions}>
      <a href={meta.repo}>Github Repository</a>
      <a href={meta.bugs}>Found a bug?</a>
      <a href={meta.bugs}>Get this Gatsby theme</a>
    </p>
    <p className={styles.copyright}>
      <small>
        &copy; {year}{' '}
        <a className="u-url" href={meta.url}>
          {meta.title}
        </a>{' '}
        &mdash; Steven J. Selcuk
      </small>
    </p>
  </footer>
)

FooterMarkup.propTypes = {
  meta: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired
}

function Footer() {
  const metaYaml = useMeta()
  const year = new Date().getFullYear()

  return <FooterMarkup year={year} meta={metaYaml} />
}

export default memo(Footer)
