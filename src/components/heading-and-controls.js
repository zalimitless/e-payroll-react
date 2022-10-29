import React from 'react'

import PropTypes from 'prop-types'

import './heading-and-controls.css'

const HeadingAndControls = (props) => {
  return (
    <div className={`heading-and-controls-container ${props.rootClassName} `}>
      <span className="">{props.placeholder}</span>
      <h1 className="heading-and-controls-text1">{props.heading}</h1>
      <button className="heading-and-controls-button button">
        {props.button}
      </button>
    </div>
  )
}

HeadingAndControls.defaultProps = {
  heading: 'Current Employees',
  placeholder: '',
  rootClassName: '',
  button: 'Add Employee',
}

HeadingAndControls.propTypes = {
  heading: PropTypes.string,
  placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default HeadingAndControls
