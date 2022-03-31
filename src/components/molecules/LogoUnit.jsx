import React, { memo } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import { moveInBottom } from '../atoms/Transitions'
import styles from './LogoUnit.module.css'
import { useApp } from '../../hooks/use-app'

LogoUnit.propTypes = {
  minimal: PropTypes.bool,
  isResume: PropTypes.bool
}

function LogoUnit({ minimal }) {


  return (
      <div className={minimal ? styles.minimal : styles.logounit}>
        {
          /*
            <p className={`p-job-title ${styles.description}`}>Find👋🏻</p>
          */
        }
      
      </div>
  )
}

export default memo(LogoUnit)
