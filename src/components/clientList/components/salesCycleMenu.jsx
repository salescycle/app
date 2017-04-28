import React from 'react'
import Styles from './SalesCycleMenu.css'

export default function SalesCycleMenu(props) {
	return (
		<div className={Styles.menuDiv}>
			<div className={Styles.crmTitle}>CRM</div>

			<div className={Styles.matchesTitle}>Potential Matches</div>
		</div>
	)
}

SalesCycleMenu.props = {}
