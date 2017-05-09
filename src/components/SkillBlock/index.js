import React from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import './SkillBlock.css';

const SkillBlock = ({isEditing, percent, onChange}) => {
  if(isEditing) {
    return (
      <InputRange
        step={10}
        maxValue={100}
        minValue={0}
        value={percent}
        onChange={onChange} />
    )
  }

  const styleSkillLine__inside = {width: `${percent}%`};

  return (
    <div className="skill-line">
      <div className="skill-line__inside" style={styleSkillLine__inside}></div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isEditing: state.edit.isEditing
  }
}

const SkillBlockConnected = connect(
  mapStateToProps
)(SkillBlock);

export default SkillBlockConnected;
