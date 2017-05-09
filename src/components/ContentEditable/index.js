import React from 'react';
import { connect } from 'react-redux';
import Link from '../Link';


import Editable from './Editable'

const ContentEditable = ({key, children, onChange, isEditing}) => {

  let contentBlock = children;

  if (isEditing) {
    contentBlock = <Editable onChange={onChange} >{children}</Editable>
  } else {
    contentBlock = linkParser(children);
  }

  return (
    <div>{contentBlock}</div>
  )

}

function linkParser(text) {
  if (text.indexOf('@') >= 0) {
    return <Link href={`mailto:${text}`}>{text}</Link>;
  } else if (text.indexOf('http://') >= 0) {
    return <Link target="_blank" href={`${text}`}>{text}</Link>;
  }
  return text
}


const mapStateToProps = (state) => {
  return {
    isEditing: state.edit.isEditing
  }
}

const ContentEditableConnected = connect(
  mapStateToProps
)(ContentEditable)

export default ContentEditableConnected;
