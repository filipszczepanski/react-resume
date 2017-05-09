import { combineReducers } from 'redux'
import sections from './sections';
import info from './info';
import edit from './edit';
import undoableResume from './undoableResume';

const resume = combineReducers({
  info,
  sections
});

const reducers = combineReducers({
  resume: undoableResume(resume),
  edit
});

export default reducers;
