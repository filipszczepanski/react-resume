import {
  ADD_SECTION, REMOVE_SECTION, SORT_SECTIONS, UPDATE_SECTION_TITLE, ADD_SECTION_BLOCK, UPDATE_SECTION_BLOCK, REMOVE_SECTION_BLOCK, SORT_SECTION_BLOCKS,
  UP_ITEM, DOWN_ITEM
} from '../actions/actionTypes';

import {createId, getIndexById, move} from '../utils'

import defaultDataJSON from '../data/defaultData.json';
import defaultSectionsModel from '../data/defaultSectionsModel.json';

const data = JSON.parse(localStorage.getItem('resume')) || defaultDataJSON;

export default function sections(state = [...data.sections], action) {
  switch (action.type) {

    case ADD_SECTION:
      return [...state, {
          id: state.length,
          type: action.sectionType,
          ...defaultSectionsModel[action.sectionType]
        }]

    case REMOVE_SECTION:
      return state.filter( section => section.id !== action.sectionId);

    case UPDATE_SECTION_TITLE:

      return state.map( section => {
        if (section.id === action.id) {
          section.title = action.title
        }
        return section;
      });

      case SORT_SECTIONS:
        let delimSection;
        switch (action.moveTo) {
          case UP_ITEM:
            delimSection = -1;
            break;
          case DOWN_ITEM:
            delimSection = 1;
            break;
          default:
            delimSection = 0;
        }

        const indexSection = getIndexById(state, action.sectionId) || 0;

        const newIndex = indexSection + delimSection;

        return move(state, indexSection, newIndex)

      case UPDATE_SECTION_BLOCK:
        return state.map( section => {
          if (section.id === action.sectionId) {
            return Object.assign({}, section, {
              items: section.items.map( block => {
                if (block.id === action.block.id) {
                  block = Object.assign({}, block, {...action.block});
                }
                return block;
              })
            })
          }
          return section;
        });

        case REMOVE_SECTION_BLOCK:
          return state.map( section => {
            if (section.id === action.sectionId) {
              return Object.assign({}, section, {
                items: section.items.filter( item => (item.id !== action.blockId))
              })
            }
            return section;
          });

      case ADD_SECTION_BLOCK:
        return state.map( section => {
          if (section.id === action.sectionId) {
            const addedSectionBlockId = createId(section.items);
            return Object.assign({}, section, {
              items: [...section.items, {
                  "id": addedSectionBlockId,
                  "title": "Skill",
                  "description": "Description",
                  "timerange": "09.2016-02.2017",
                  "percent": 50
              }]
            })
          }
          return section;
        });
      case SORT_SECTION_BLOCKS:
        let delim;
        switch (action.moveTo) {
          case UP_ITEM:
            delim = -1;
            break;
          case DOWN_ITEM:
            delim = 1;
            break;
          default:
            delim = 0;
        }

        return Object.assign([], state,
          state.map( section => {
            if (section.id === action.sectionId) {
              const indexItem = getIndexById(section.items, action.blockId) || 0;
              const newIndex = indexItem + delim;
              return Object.assign({}, section, {
                  items: [...move(section.items, indexItem, newIndex)]
              })
            }
            return section;
          })
        )

    default:
      return state;
  }
}
