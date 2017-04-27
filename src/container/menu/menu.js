import {connect} from 'react-redux'
import Menu from '../../components/menu/menu.jsx'

import css from '../../components/menu/menu.css'
import styleable from 'react-styleable'
import {loadUsers} from '../../actions/user-action'

const mapStateToProps(state) {
  return {titleText: state.titleText}
}

export default connect(mapStateToProps, mapDispatchToProps)(styleable(css)(Menu))
