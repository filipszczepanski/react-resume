import React from 'react';

const ButtonSort = ({type, onClick}) => {
  const iconName = type === 'down' ? 'angle-down' : 'angle-up';
  const style = {
    position: 'absolute',
    transform: `translateY(${type === 'up' ? '-100%' : 0})`
  }
  return (
      <button style={style} className="btn btn-sm btn-primary" {...{onClick}} ><i className={`fa fa-${iconName}`}></i></button>
  )
}
export default ButtonSort;
