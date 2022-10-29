import React from 'react'

import PropTypes from 'prop-types'

import NewEmployeeControls from './new-employee-controls'
import NewEmployeeForm from './new-employee-form'
import './new-employee-section.css'

const NewEmployeeSection = (props) => {
  return (
    <div className={`new-employee-section-container ${props.rootClassName} `}>
      <div className="new-employee-section-container1">
        <h1 className="">{props.heading}</h1>
      </div>
      <div className="new-employee-section-container2">
        <NewEmployeeControls
          rootClassName="new-employee-controls-root-class-name"
          className=""
        ></NewEmployeeControls>
      </div>
      <NewEmployeeForm
        rootClassName="new-employee-form-root-class-name"
        className=""
      ></NewEmployeeForm>
    </div>
  )
}

NewEmployeeSection.defaultProps = {
  rootClassName: '',
  heading: 'Heading',
}

NewEmployeeSection.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default NewEmployeeSection
