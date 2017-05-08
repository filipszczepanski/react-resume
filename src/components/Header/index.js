import React from 'react';
import InfoDetails from '../InfoDetails/';
import UserImage from '../UserImage/';
import ContentEditable from '../ContentEditable/';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Header.css';

const Header = ({name, lastname, jobtitle, details, photo, onUpdateName, onUpdateLastname, onUpdateJobtitle, onUpdatePhoto}) => {

  return (
    <header>
      <div className="row">
        <div className="col-md-6 mb-5">
          <h1 className="title">
            Resume
          </h1>
          <h2 className="name">
            <ContentEditable onChange={(name)=>onUpdateName(name)}>{name}</ContentEditable>
          </h2>
          <h2 className="lastname">
            <ContentEditable onChange={(lastname)=>onUpdateLastname(lastname)}>{lastname}</ContentEditable>
          </h2>
          <h2 className="job">
            <ContentEditable onChange={(name)=>onUpdateJobtitle(name)}>{jobtitle}</ContentEditable>
          </h2>
          <InfoDetails details={[...details]} />
        </div>
        <div className="col-md-6 mb-5">
          <UserImage photo={photo} onChange={(image)=>onUpdatePhoto(image)}/>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {...state.resume.info};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateName: (name) => {
      dispatch(actions.updateName(name))
    },
    onUpdateLastname: (lastname) => {
      dispatch(actions.updateLastname(lastname))
    },
    onUpdateJobtitle: (jobtitle) => {
      dispatch(actions.updateJobtitle(jobtitle))
    },
    onUpdatePhoto: (image) => {
      dispatch(actions.updatePhoto(image))
    }
  }
}

const HeaderConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderConnected;
