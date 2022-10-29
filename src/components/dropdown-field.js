import React from 'react'

import PropTypes from 'prop-types'

import './dropdown-field.css'

const DropdownField = (props) => {
  return (
    <div className={`dropdown-field-container ${props.rootClassName} `}>
      <span className="dropdown-field-text">{props.FieldName}</span>
      <select className="dropdown-field-select">
        <option value="Dr" className="">
          Dr
        </option>
        <option value="Mr" className="">
          Mr
        </option>
        <option value="Mrs" className="">
          Mrs
        </option>
        <option value="Ms" className="">
          Ms
        </option>
        <option value="Mx" className="">
          Mx
        </option>
      </select>
      <div
        data-thq="thq-dropdown"
        className="dropdown-field-thq-dropdown list-item"
      >
        <ul
          data-thq="thq-dropdown-list"
          className="dropdown-field-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="dropdown-field-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="dropdown-field-dropdown-toggle"
            >
              <span className="dropdown-field-text1">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="dropdown-field-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="dropdown-field-dropdown-toggle1"
            >
              <span className="dropdown-field-text2">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="dropdown-field-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="dropdown-field-dropdown-toggle2"
            >
              <span className="dropdown-field-text3">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
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
