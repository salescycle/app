import React, {PropTypes} from 'react'


export default function Header(props){
  return (
    <div>
          <h1>{'Sale Cycle App' + props.titleText}</h1>
    </div>
  )
}

Header.props = {
  titleText: PropTypes.string
}
