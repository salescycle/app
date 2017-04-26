import iniitialState from './initial-state'
var users = [{
    name : 'Ananth',
    id: '1'
  },{
    name : 'Ramasamy',
    id: '2'
  }
]

function usersReducer(state=iniitialState, action){
    switch (action.type) {
      case 'LOAD_USERS':
          return Object.assign({}, state, {
          users
       })
      default :
        return iniitialState
    }
}

export default usersReducer
