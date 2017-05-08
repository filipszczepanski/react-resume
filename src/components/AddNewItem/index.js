import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


const AddNewItem = ({isEditing, onAddNewSection}) => {

  const _handleAddNewSection = (event, sectionType) => {
    event.preventDefault();
    onAddNewSection(sectionType);
  }
  if (!isEditing) {
    return <div></div>
  }
  return (
    <div className="addNewSection text-center">
      <div className="dropdown dropup d-inline-block">
        <button className="btn btn-secondary dropdown-toggle btn-add btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          New Section
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={(event)=>_handleAddNewSection(event, 'basic')}>Section</a>
          <a className="dropdown-item" href="#" onClick={(event)=>_handleAddNewSection(event, 'timerange')}>Section with Time Range</a>
          <a className="dropdown-item" href="#" onClick={(event)=>_handleAddNewSection(event, 'skills')}>Section with Skills Line</a>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isEditing: state.edit.isEditing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNewSection: (sectionType) => {
      dispatch(actions.addNewSection(sectionType))
    }
  }
}

const AddNewItemConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewItem);


export default AddNewItemConnected;
