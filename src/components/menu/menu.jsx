import React, {PropTypes} from 'react'


export default function Menu(props) {
	return (
		<div>
			<div className={props.menuStyle}>This sucks</div>
		</div>
	)
}

Menu.props = {
	menuStyle: PropTypes.string
}
