import React from "react";

import PropTypes from "prop-types";

import "./text-input-field.css";

const TextInputField = (props) => {
  return (
    <div className={`input-field-container ${props.rootClassName} `}>
      <span className="text-input-field-text">
        {props.FieldName + (props.Mandatory ? " *" : "")}
      </span>
      <input
        type={props.type ?? "text"}
        placeholder={props.textinputfield}
        className="input"
        disabled={props.isDisabled}
        value={props?.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

TextInputField.defaultProps = {
  textinputfield: "Input Field",
  FieldName: "Text Input Field",
  value: "",
  rootClassName: "",
};

TextInputField.propTypes = {
  textinputfield: PropTypes.string,
  FieldName: PropTypes.string,
  value: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default TextInputField;
