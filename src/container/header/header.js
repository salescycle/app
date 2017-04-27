import {connect} from 'react-redux'
import Header from '../../components/header/header.jsx'

import css from '../../components/header/header.css'
import styleable from 'react-styleable'
import {loadUsers} from '../../actions/user-action'

const mapStateToProps(state) {
  return {titleText: state.titleText}
}

export default connect(mapStateToProps)(styleable(css)(Header))
