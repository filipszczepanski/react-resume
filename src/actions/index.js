import {
  UNDO_RESUME, SAVE_RESUME,
  UPDATE_NAME, UPDATE_LASTNAME, UPDATE_JOBTITLE, UPDATE_PHOTO,
  ADD_SECTION, REMOVE_SECTION, SORT_SECTIONS, UPDATE_SECTION_TITLE, ADD_SECTION_BLOCK, UPDATE_SECTION_BLOCK, REMOVE_SECTION_BLOCK, SORT_SECTION_BLOCKS,
  UPDATE_DETAIL_TITLE, UPDATE_DETAIL_DESCRIPTION,
  TOGGLE_EDIT, CANCEL_EDIT
} from '../actions/actionTypes';


export function updateName(name) {
  return {
    type: UPDATE_NAME,
    name
  }
}
export function updateLastname(lastname) {
  return {
    type: UPDATE_LASTNAME,
    lastname
  }
}
export function updateJobtitle(jobtitle) {
  return {
    type: UPDATE_JOBTITLE,
    jobtitle
  }
}
export function updateDetailTitle(id, title) {
  return {
    type: UPDATE_DETAIL_TITLE,
    id,
    title
  }
}
export function updateDetailDescription(id, description) {
  return {
    type: UPDATE_DETAIL_DESCRIPTION,
    id,
    description
  }
}
export function updatePhoto(photo) {
  return {
    type: UPDATE_PHOTO,
    photo
  }
}
export function addNewSection(sectionType) {
  return {
    type: ADD_SECTION,
    sectionType
  }
}
export function removeSection(sectionId) {
  return {
    type: REMOVE_SECTION,
    sectionId
  }
}
export function sortSections(sectionId, moveTo) {
  return {
    type: SORT_SECTIONS,
    sectionId,
    moveTo
  }
}
export function updateSectionTitle(id, title) {
  return {
    type: UPDATE_SECTION_TITLE,
    id,
    title
  }
}
export function updateSectionBlock(sectionId, block) {
  return {
    type: UPDATE_SECTION_BLOCK,
    sectionId,
    block
  }
}
export function addSectionBlock(sectionId) {
  return {
    type: ADD_SECTION_BLOCK,
    sectionId
  }
}

export function removeSectionBlock(sectionId, blockId) {
  return {
    type: REMOVE_SECTION_BLOCK,
    sectionId,
    blockId
  }
}
export function sortSectionBlocks(sectionId, blockId, moveTo) {
  return {
    type: SORT_SECTION_BLOCKS,
    sectionId,
    blockId,
    moveTo
  }
}

export function toggleEdit() {
  return {
    type: TOGGLE_EDIT,
  }
}

export function cancelEdit() {
  return {
    type: CANCEL_EDIT,
  }
}

export function saveResume() {
  return {
    type: SAVE_RESUME,
  }
}

export function undoResume() {
  return {
    type: UNDO_RESUME
  }
}
