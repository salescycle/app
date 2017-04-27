import React, {PropTypes} from 'react'
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
	chevronText: PropTypes.string,
	chevronBackground: PropTypes.string
}
