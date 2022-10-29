import React from 'react'

import PropTypes from 'prop-types'

import './radio-options-field.css'

const RadioOptionsField = (props) => {
  return (
    <div className="radio-options-field-container">
      <span className="radio-options-field-text">{props.FieldName}</span>
    </div>
  )
}

RadioOptionsField.defaultProps = {
  FieldName: 'Text Input Field',
  rootClassName: 'Radio',
}

RadioOptionsField.propTypes = {
  FieldName: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default RadioOptionsField
