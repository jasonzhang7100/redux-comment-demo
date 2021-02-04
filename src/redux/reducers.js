import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS } from './action-types'
import { combineReducers } from 'redux'

const initComment = []
function comments(state = initComment, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.data
    case ADD_COMMENT:
      return [action.data, ...state]
    case DELETE_COMMENT:
      return state.filter((comment, index) => index !== action.data)
    default:
      return state
  }
}

export default combineReducers(
  {
    comments
  }
)