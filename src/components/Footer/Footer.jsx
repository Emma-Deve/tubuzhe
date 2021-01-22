import React from 'react'
// @material-ui/icons
// import Icon from '@material-ui/core/Icon'
import GitHub from '@material-ui/icons/GitHub'
import styles from './Footer.module.scss'

export default () => {
  return (
    <div className={styles.footer}>
      <p>
        &copy; 徒步者联盟
      </p>
    </div>
  )
}