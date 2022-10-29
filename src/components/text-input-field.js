import React from 'react'

import PropTypes from 'prop-types'

import './text-input-field.css'

const TextInputField = (props) => {
  return (
    <div className={`text-input-field-container ${props.rootClassName} `}>
      <span className="text-input-field-text">{props.FieldName}</span>
      <input type="text" placeholder={props.textinputfield} className="input" />
    </div>
  )
}

TextInputField.defaultProps = {
  textinputfield: 'Input Field',
  FieldName: 'Text Input Field',
  rootClassName: '',
}

TextInputField.propTypes = {
  textinputfield: PropTypes.string,
  FieldName: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TextInputField
