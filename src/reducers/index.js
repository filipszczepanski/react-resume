import { combineReducers } from 'redux'
import sections from './sections';
import info from './info';
import edit from './edit';

const resume = combineReducers({
  info,
  sections
});

const reducers = combineReducers({
  resume,
  edit
});

export default reducers;
