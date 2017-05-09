import {
  UPDATE_NAME, UPDATE_LASTNAME, UPDATE_JOBTITLE, UPDATE_PHOTO,
  UPDATE_DETAIL_TITLE, UPDATE_DETAIL_DESCRIPTION
} from '../actions/actionTypes';

import defaultDataJSON from '../data/defaultData.json';
const data = JSON.parse(localStorage.getItem('resume')) || defaultDataJSON;

export default function info(state = {...data.info}, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, {
        name: action.name,
      });

    case UPDATE_LASTNAME:
      return Object.assign({}, state, {
        lastname: action.lastname,
      });

    case UPDATE_JOBTITLE:
      return Object.assign({}, state, {
        jobtitle: action.jobtitle,
      });

    case UPDATE_DETAIL_TITLE:
      return Object.assign({}, state, {
        details: state.details.map((item, index) => {
          if(item.id === action.id) {
            item.title = action.title
          }
          return item
        })
      });

    case UPDATE_DETAIL_DESCRIPTION:
      return Object.assign({}, state, {
        details: state.details.map((item, index) => {
          if(item.id === action.id) {
            item.description = action.description
          }
          return item
        })
      });

    case UPDATE_PHOTO:
      return Object.assign({}, state, {
        photo: action.photo,
      });

    default:
      return state;
  }
}
