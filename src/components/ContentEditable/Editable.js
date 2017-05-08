import React, { Component } from 'react';
import classnames from 'classnames'

 class Editable extends Component {



     constructor(props) {
       super(props)
       const { children } = props

       this.state = {
         text: children || ''
       }

     }

     dispatchOnEnter = event => {
       const { onEnter } = this.props
       if ((event.key === 'Enter' || event.keyCode === 13)
           && typeof onEnter === 'function') {
         event.preventDefault()
         onEnter()
       }
     }

     getText = element => {
       return element.innerText || this.getTextForFirefox(element)
     }

     getTextForFirefox(el) {
       // Taken from http://stackoverflow.com/a/3908094
       let text = ''
       if (typeof window.getSelection != 'undefined') {
         const sel = window.getSelection()
         const tempRange = sel.getRangeAt(0)
         sel.removeAllRanges()
         const range = document.createRange()
         range.selectNodeContents(el)
         sel.addRange(range)
         text = sel.toString()
         sel.removeAllRanges()
         sel.addRange(tempRange)
       }

       return text
     }

     onTextChange = event => {
       const text = this.getText(event.target)
       this.setState({ text })

     }

     onTextBlur() {
       this.props.onChange(this.state.text)
       console.log('blur');
     }

     render() {
       const { onFocus, placeholder, children } = this.props
       return (
         <div
           ref="content"
           contentEditable
           className={this.classname}
           dangerouslySetInnerHTML={{__html: children}}
           onInput={this.onTextChange}
           onKeyDown={this.dispatchOnEnter}
           onBlur={this.onTextBlur.bind(this)}
           onFocus={(e)=>{console.log(e)}}
           placeholder={placeholder}
         />
       )
     }
   }

export default Editable;
