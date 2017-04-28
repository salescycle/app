import iniitialState from './initial-state'
var users = [{
    name : 'Ananth',
    id: '1'
  },{
    name : 'Ramasamy',
    id: '2'
  },{
    name : 'Jimmy Jam',
    id: '2'
  }
]

function usersReducer(state=iniitialState, action){
    switch (action.type) {
      case 'LOAD_USERS':
            return Object.assign({}, state, {
              users
            })

            break;
      case 'FETCH_CLIENTLIST_SUCCESS':
        return Object.assign({}, state,
              action.payload
              )
        break;
      default :
        return iniitialState
    }
}

export default usersReducer
