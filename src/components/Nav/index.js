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
    onSave();
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
        <button type="button" className="btn btn-secondary" onClick={_handleCancel}>Cancel</button>
        <button type="button" className="btn btn-danger" onClick={_handleSave}>Save</button>
      </div>
    )
  }

  return (
    <nav>
      {navContent}
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    isEditing: state.edit.isEditing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleEdit: () => {
      dispatch(actions.toggleEdit());
    },
    onSave: (resume) => {
      dispatch(actions.saveResume());
    },
    onCancel: () => {
      dispatch(actions.undoResume());
    }
  }
}

const NavConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)

export default NavConnected;
