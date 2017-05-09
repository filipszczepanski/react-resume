import { createStore, compose, applyMiddleware } from 'redux';
import { SAVE_RESUME } from '../actions/actionTypes'
import reducers from '../reducers';
import defaultDataJSON from '../data/defaultData.json';

const updateLocalStorage = (resume) => {
  try {
    const resumeSerialized = JSON.stringify(resume);
    localStorage.setItem('resume', resumeSerialized);
  } catch (err) {
    console.log(err);
  }
}

const loadResume = (defaultDataJSON) => {
  try {
    const serializedState = localStorage.getItem('resume');
    if (serializedState === null) {
      return defaultDataJSON;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return defaultDataJSON;
  }
}

function storage({ getState }) {
  return (next) => (action) => {
    let nextAction = next(action)
    const resume = getState().resume.present
    switch (action.type) {
      case SAVE_RESUME:
        updateLocalStorage(resume)
        break;
      default:
    }
    return nextAction
  }
}

const initialState = {
  resume: {
    past:[],
    present: loadResume(defaultDataJSON)
  },
  edit: {
    isEditing: false
  }

}

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(storage))
);

export default store;
