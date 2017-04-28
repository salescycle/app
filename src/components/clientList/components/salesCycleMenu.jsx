import React from 'react'
import Styles from './SalesCycleMenu.css'

export default function SalesCycleMenu(props) {
	var menuDivFF = Styles.menuDivFactfinding
	var menuDivPrep = Styles.menuDivPreparation
	return (
		<div className={menuDivPrep}>
			<div className={Styles.crmTitle}>CRM</div>

			<div className={Styles.matchesTitle}>Potential Matches</div>
		</div>
	)
}

SalesCycleMenu.props = {}
