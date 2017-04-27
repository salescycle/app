import React, {PropTypes} from 'react'
<<<<<<< Updated upstream
=======
import Chevron from '../chevron/chevron.jsx'
>>>>>>> Stashed changes

export default function Menu(props){
  return (
    <div>
<<<<<<< Updated upstream
        <div className="{menuStyle}">This sucks</div>
=======
        <div className="chevron">This doesn't</div>
				<Chevron chevronText='Factfinder' />

>>>>>>> Stashed changes
    </div>
  )
}

Menu.props = {
  menuStyle: PropTypes.string
}
