import React, {PropTypes} from 'react'

export default function Chevron(props) {
	return (
		<div>
			<svg width="300px" height="300px" xmlns="../../svgs/Chevron1.svg">
				<text x="10" y="50" font-size="30">{props.chevronText}</text>
			</svg>

			<object type="image/svg+xml" data="../../svgs/chevron1.svg">
				<text x="10" y="50" font-size="30">{props.chevronText}</text>
			</object>

			<img src="../../svgs/chevron1.svg" />
		</div>
	)
}

Chevron.props = {
	chevronText: PropTypes.string
}
