import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ContentEditable from '../ContentEditable/';
import SectionBlock from '../SectionBlock/';
import ButtonRemove from '../ButtonRemove';
import './Section.css';

const Section = ({id, type, title, items, isEditing, onRemoveSection, onUpdateSectionTitle, onSortSections, onAddSectionBlock}) => {
  const sectionBlocks = items.map( (item, index) =>
    <SectionBlock type={type} key={index} {...item} sectionId={id} />
  );
  return (
    <section className="section">
      <header>
        {isEditing &&
          <ButtonRemove onClick={()=>onRemoveSection(id)}/>
        }
        <div className="section__title">
          <ContentEditable onChange={(updatedTitle)=>onUpdateSectionTitle(id, updatedTitle)}>
            {title}
          </ContentEditable>
        </div>
      </header>
      {sectionBlocks}

      {isEditing && (type !== 'basic' ||  items.length === 0) &&
        <button className="addSectionBlock btn btn-sm btn-secondary form-control" onClick={()=>onAddSectionBlock(id)}> + </button>
      }
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    isEditing: state.edit.isEditing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateSectionTitle: (id, title) => {
      dispatch(actions.updateSectionTitle(id, title))
    },
    onAddSectionBlock: (sectionId) => {
      dispatch(actions.addSectionBlock(sectionId))
    },
    onRemoveSection: (sectionId) => {
      dispatch(actions.removeSection(sectionId))
    },
    onSortSections: (sectionId, moveTo) => {
      dispatch(actions.sortSections(sectionId, moveTo))
    },
  }
}

const SectionConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Section);

export default SectionConnected;
