import React from 'react'

import PropTypes from 'prop-types'

import TextInputField from './text-input-field'
import DropdownField from './dropdown-field'
import './new-employee-form.css'

const NewEmployeeForm = (props) => {
  return (
    <div className={`new-employee-form-container ${props.rootClassName} `}>
      <form className="new-employee-form-form">
        <div className="new-employee-form-container1">
          <div className="new-employee-form-container2">
            <TextInputField
              FieldName="First Name(s) *"
              rootClassName="text-input-field-root-class-name"
              className=""
            ></TextInputField>
            <TextInputField
              FieldName="Last Name *"
              rootClassName="text-input-field-root-class-name3"
              className=""
            ></TextInputField>
            <DropdownField
              FieldName="Salutation"
              rootClassName="dropdown-field-root-class-name"
              className=""
            ></DropdownField>
          </div>
          <div className="new-employee-form-container3">
            <TextInputField
              FieldName="Full Name"
              rootClassName="text-input-field-root-class-name1"
              className=""
            ></TextInputField>
            <TextInputField
              FieldName="Gross Salary $PY"
              rootClassName="text-input-field-root-class-name2"
              className=""
            ></TextInputField>
          </div>
        </div>
      </form>
    </div>
  )
}

NewEmployeeForm.defaultProps = {
  rootClassName: '',
}

NewEmployeeForm.propTypes = {
  rootClassName: PropTypes.string,
}

export default NewEmployeeForm
