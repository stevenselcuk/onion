import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useApp } from '../hooks/use-app'
import { useMeta } from '../hooks/use-meta'
import SEO from '../components/atoms/SEO'
import styles from './index.module.css'
import { ReactComponent as DownloadBadge } from '../images/DownloadBadgeDark.svg'

Home.propTypes = {
  pageContext: PropTypes.object.isRequired
}

function Home({ pageContext }) {
  const { basics } = useApp()
  const meta = useMeta()

  const image = `.${meta.img.childImageSharp.resize.src}`

  return (
    <>
      <SEO title={basics.name} description={basics.label} />
      <div className={styles.hero}>
        <div className={styles.details}>
          <div className={styles.hugetitle}>checklist</div>
          <div className={styles.desc}>
           for general aviation pilots. on your cockpit.
          </div>
          <div className={styles.badge}>
            <a
              href={basics.storeUrl}
              title="Get Checklist App on the App Store"
            >
              <DownloadBadge />
            </a>
          </div>
        </div>

        <img
          src={image}
          className={styles.productimage}
          alt="iPad Pro 5th generation"
          title="Checklist for General Aviation Pilots"
        />
      </div>
    </>
  )
}

export default memo(Home)
