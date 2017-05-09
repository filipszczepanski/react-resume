import React from 'react';
import { connect } from 'react-redux';
import Section from '../Section';
import './Sections.css';

const Sections = ({sections}) => {

  return (
    <div className="mb-5 sections">
      {sections.map((item, index)=><Section key={`item-${index}`} {...item} />)}
    </div>
  )

}

const mapStateToProps = (state) =>{
  return {
    sections: state.resume.present.sections
  }
}

const SectionsConnected = connect(
  mapStateToProps
)(Sections);
export default SectionsConnected;
