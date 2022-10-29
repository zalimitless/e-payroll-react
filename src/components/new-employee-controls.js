import React from 'react'

import PropTypes from 'prop-types'

import './new-employee-controls.css'

const NewEmployeeControls = (props) => {
  return (
    <div className={`new-employee-controls-container ${props.rootClassName} `}>
      <button className="new-employee-controls-button button">
        {props.Cancel_Button}
      </button>
      <button className="new-employee-controls-button1 button">
        {props.Save_Button}
      </button>
    </div>
  )
}

NewEmployeeControls.defaultProps = {
  rootClassName: '',
  Cancel_Button: 'Cancel',
  Save_Button: 'Save',
}

NewEmployeeControls.propTypes = {
  rootClassName: PropTypes.string,
  Cancel_Button: PropTypes.string,
  Save_Button: PropTypes.string,
}

export default NewEmployeeControls
