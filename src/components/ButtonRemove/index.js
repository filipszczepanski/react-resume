import React from 'react'

const ButtonRemoveSectionBlock = ({onClick}) => {
  return (
    <button className="btn btn-remove btn-danger btn-sm" onClick={onClick}>
      <i className="fa fa-close"></i>
    </button>
  )
}

export default ButtonRemoveSectionBlock;
