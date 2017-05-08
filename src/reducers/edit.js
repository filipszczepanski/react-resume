import {
  TOGGLE_EDIT
} from '../actions/actionTypes';

export default function edit(state = {isEditing:false}, action) {
  switch (action.type) {
    case TOGGLE_EDIT:
      return Object.assign({}, state, {
        isEditing: !state.isEditing
      });
    default:
      return state;
  }
}
