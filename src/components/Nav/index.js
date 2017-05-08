import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'
import './Nav.css'


const Nav = ({resume, isEditing, onToggleEdit, onSave, onCancel}) => {

  const _handleOnClick = (event) => {
      event.preventDefault();
      onToggleEdit();
  }
  const _handleSave = (event) => {
    event.preventDefault();
    onSave(Object.assign({}, resume));
    onToggleEdit();
  }

  const _handleCancel = (event) => {
    event.preventDefault();
    onCancel();
    onToggleEdit();
  }

  let navContent = <button type="button" className="btn btn-outline-primary" onClick={_handleOnClick}>Edit</button>
  if (isEditing) {
    navContent = (
      <div className="btn-group" role="group" aria-label="nav group">
        {/* <button type="button" className="btn btn-secondary" onClick={_handleCancel}>Cancel</button> */}
        {/* <button type="button" className="btn btn-danger" onClick={_handleSave}>Save</button> */}
        <button type="button" className="btn btn-success" onClick={_handleSave}>Done</button>
      </div>
    )
  }

  return (
    <nav>
      {navContent}
    </nav>
  )
}

const updateToLocalStorage = (resume) => {
  const resumeJSON = JSON.stringify(resume);
  localStorage.setItem('resume', resumeJSON);
}

const mapStateToProps = (state) => {
  return {
    resume: state.resume,
    isEditing: state.edit.isEditing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleEdit: () => {
      dispatch(actions.toggleEdit());
    },
    onSave: (resume) => {
      updateToLocalStorage(resume)
    },
    onCancel: () => {
      // dispatch(actions.undoResume());
    }
  }
}

const NavConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)

export default NavConnected;
