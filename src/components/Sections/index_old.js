import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../Section';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';


const SortableSectionItem = SortableElement( ({itemProps}) => <Section {...itemProps} /> );

const SortableSections = SortableContainer(({items})=>{
  return (
    <div>
      {items.map((item, index)=><SortableSectionItem key={`item-${index}`} index={index}  itemProps={item} />)}
    </div>
  )
});

const UnSortableSections = ({items})=>{
  return (
    <div>
      {items.map((item, index)=><Section key={`item-${index}`} {...item} />)}
    </div>
  )
};

class Sections extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: props.sections
    }
  }

  _onSortEnd = ({oldIndex, newIndex}) => {
      this.setState({
        items: arrayMove(this.state.items, oldIndex, newIndex),
      });
  };

  render() {

    const sections = this.props.sections;

    const styleSections = {
      columns: '2 350px',
      columnGap: '2.5em'
    }

    return (
      <div style={styleSections} className="mb-5">
        {sections.map((item, index)=><Section key={`item-${index}`} {...item} />)}
      </div>
    )
  }
}

/* this.props.isEditing ? <SortableSections items={sections} onSortEnd={this._onSortEnd} /> : <UnSortableSections items={sections} />
 */

const mapStateToProps = (state) =>{
  return {
    sections: state.resume.sections,
    isEditing: state.edit.isEditing
  }
}

const SectionsConnected = connect(
  mapStateToProps
)(Sections);
export default SectionsConnected;
