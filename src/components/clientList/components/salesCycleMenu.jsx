import React from 'react'
import Styles from './SalesCycleMenu.css'

export default function SalesCycleMenu(props) {
	var menuDivFF = Styles.menuDivFactfinding
	var menuDivPrep = Styles.menuDivPreparation
	return (
		<div className={menuDivFF}>
			<div className={Styles.CRMDiv}>
				<div className={Styles.crmTitle}>CRM</div>
				<div className={Styles.crmDataName}>
					<span>Bill</span>
					<span>Braskulina</span>
				</div>
				<ul className={Styles.crmDataInfo}>
					<li>12/02/1973</li>
					<li>123 Terry Dr. WI, 53291</li>
					<li>M</li>
				</ul>
			</div>
			<div className={Styles.matchesDiv}>
				<div className={Styles.matchesTitle}>Potential Matches</div>
				<input className={Styles.checkbox} type="checkbox"/>
				<span>Bob Braskolinaowsiki</span>
				<span>123 Terri Dr. WI, 53291</span>
				<span>M</span>
				<span>.50</span>
			</div>
		</div>
	)
}

SalesCycleMenu.props = {}
