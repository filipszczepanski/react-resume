import React from 'react';
import ContentEditable from '../ContentEditable/';
import { connect } from 'react-redux';
import * as actions from '../../actions';
// import Link from '../Link';
import './InfoDetails.css'

const InfoDetails = ({details, onUpdateDetailTitle, onUpdateDetailDescription}) => {

  const items = details.map((item, index)=>{
    const {id, title, description} = item;
    return (
      <tr key={index}>
        <td>
          <ContentEditable onChange={(updatedTitle)=>onUpdateDetailTitle(id, updatedTitle)}>
            {title}
          </ContentEditable>
        </td>
        <td>
          <ContentEditable onChange={(updatedDescription)=>onUpdateDetailDescription(id, updatedDescription)}>
            {description}
          </ContentEditable>
        </td>
      </tr>
    );
  });

  return (
    <table className="table__user-info">
      <tbody>
        {items}
      </tbody>
    </table>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateDetailTitle: (id, title) => {
      dispatch(actions.updateDetailTitle(id, title))
    },
    onUpdateDetailDescription: (id, description) => {
      dispatch(actions.updateDetailDescription(id, description))
    }
  }
}

const InfoDetailsConnected = connect(
  null,
  mapDispatchToProps
)(InfoDetails);

export default InfoDetailsConnected;
