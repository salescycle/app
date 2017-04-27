import React from 'react'
import { elementType } from 'react-prop-types';
var chevronImage = require('../../../svgs/chevron5.svg')

export default function Chevron(props) {
	return (
		<div>
			<div className={props.chevronBackground}>
				<span>{props.chevronText}</span>
			</div>
		</div>
	)
}

Chevron.props = {
	chevronBackground: elementType
}
