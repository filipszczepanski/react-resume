import React, {Component} from 'react';
import classNames from 'classnames';
import SkillBlock from '../SkillBlock';
import ButtonRemove from '../ButtonRemove';
import ContentEditable from '../ContentEditable';
import ButtonSort from '../ButtonSort';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { UP_ITEM, DOWN_ITEM } from '../../actions/actionTypes';

import './SectionBlock.css';

class SectionBlock extends Component {


  render() {

    let {sectionId, type, id, title, description, percent, timerange, isEditing, onUpdateSectionBlock, onRemoveSectionBlock, onSortSectionBlocks} = this.props;

    const blockClass = classNames('section__item', {'section__item--isEditing':isEditing});
    return (
        <div className={blockClass}>

          {isEditing &&
            <ButtonSort type="up" onClick={()=>onSortSectionBlocks(sectionId, id, UP_ITEM)} />
          }


          {type === 'timerange' &&
            <div className="time-range">
              <ContentEditable onChange={(timerange)=>onUpdateSectionBlock(sectionId, {id, title, description, percent, timerange})}>
                {timerange}
              </ContentEditable>
            </div>
          }

          {(type === 'timerange' || type === 'skills' ) &&
            <div className="section__item__name">
              <ContentEditable onChange={(title)=>onUpdateSectionBlock(sectionId, {id, title, description, percent, title})}>
                {title}
              </ContentEditable>
            </div>
          }

          {(type === 'timerange' || type === 'basic' ) &&
            <div className="section__item__desc">
              <ContentEditable className="test" onChange={(description)=>onUpdateSectionBlock(sectionId, {id, description, description, percent, description})}>
                {description}
              </ContentEditable>
            </div>}

          {(type === 'skills' ) && <SkillBlock isEditing={isEditing} percent={percent} onChange={(percent)=>onUpdateSectionBlock(sectionId, {id, description, description, percent, description})}/> }

          {isEditing &&
            <ButtonSort type="down" onClick={()=>onSortSectionBlocks(sectionId, id, DOWN_ITEM)} />
          }

          {isEditing &&
            <ButtonRemove onClick={()=>onRemoveSectionBlock(sectionId, id)}/>
          }

        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isEditing: state.edit.isEditing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateSectionBlock: (sectionId, block) => {
      dispatch(actions.updateSectionBlock(sectionId, block))
    },
    onRemoveSectionBlock: (sectionId, blockId) => {
      dispatch(actions.removeSectionBlock(sectionId, blockId))
    },
    onSortSectionBlocks: (sectionId, blockId, moveTo) => {
      dispatch(actions.sortSectionBlocks(sectionId, blockId, moveTo))
    },
  }
}

const SectionBlockConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionBlock);

export default SectionBlockConnected;
