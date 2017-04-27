import React, {PropTypes} from 'react'
import styles from './header.css'
var nmLogo = require('../../../svgs/nmlogo_navy.svg')


export default function Header(props){
  return (
    <div>
					<img src={nmLogo} className="styles.titleImage" />
  				<div>
  					<span className={styles.headerScheme}>{props.titleText}</span>
  				</div>
    </div>
  )
}

Header.props = {
  titleText: PropTypes.string
}
