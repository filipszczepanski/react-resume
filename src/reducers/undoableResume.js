import { UNDO_RESUME } from '../actions/actionTypes';

export default function undoableResume(reducer) {
  const initialResume = {
    past: [],
    present: reducer(undefined, {})
  }

  return (state = initialResume, action) => {
    const { past, present } = state

    switch (action.type) {

      case UNDO_RESUME:
        if (past.length > 0) {
          return {
            past: [],
            present: past[0]
          }
        }
        return state;

      default:

        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action)
        if (present === newPresent) {
          return state
        }
        return {
          past: [ ...past, present ],
          present: newPresent,
        }
    }
  }
}
