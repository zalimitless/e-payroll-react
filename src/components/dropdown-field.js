import React from 'react'

import PropTypes from 'prop-types'

import './dropdown-field.css'

const DropdownField = (props) => {

  let salutations = ["Dr", "Mr", "Mrs", "Ms", "Mx"];

  return (
    <div className={`dropdown-field-container ${props.rootClassName} `}>
      <span className="dropdown-field-text">{props.FieldName + (props.Mandatory ? ' *' : '')}</span>
      <select className="dropdown-field-select">
        {
          salutations.map((salutation) => {return (<option value={salutation} selected={salutations.indexOf(salutation) === props.value}>{salutation}</option>)})
        }
      </select>
    </div>
  )
}

DropdownField.defaultProps = {
  rootClassName: '',
  FieldName: 'Text Input Field',
}

DropdownField.propTypes = {
  rootClassName: PropTypes.string,
  FieldName: PropTypes.string,
}

export default DropdownField
