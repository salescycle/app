import React from 'react'
import PropTypes from 'prop-types'
import styles from './header.css'
var nmLogo = require('../../../svgs/nmlogo_navy.svg')


export default function Header(props){
  return (
    <div className="row collapse">
			<div className="columns small-4">
				<img src={nmLogo} className={styles.titleImage} />
			</div>
			<div className={`${styles.appNameDiv} columns small-8`}>
				<span className={styles.appName}>{props.titleText}</span>
			</div>
    </div>
  )
}

Header.props = {
  titleText: PropTypes.string
}
