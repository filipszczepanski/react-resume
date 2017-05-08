import React from 'react';

import './Link.css';

const Link = (props) => {
  const {children, ...restProps} = props
  return (
    <a className="link" {...restProps}>{children}</a>
  )
}

export default Link;
