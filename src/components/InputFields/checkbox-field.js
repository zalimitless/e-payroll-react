import React from "react";

import PropTypes from "prop-types";

import "../../Styling/checkbox-field.css";

const CheckboxField = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        key={props.dataObject.id}
        onChange={(e) =>
          props.onSelect({
            id: props.dataObject.id,
            selected: e.target.checked,
            colour: props.dataObject.colour,
          })
        }
        className="checkbox"
        checked={props.value}
      />
      <span>{props.dataObject.id}</span>
    </div>
  );
};

CheckboxField.defaultProps = {
  onSelect: (e) => {},
  value: false,
  FieldName: "CheckBox",
};

CheckboxField.propTypes = {
  onSelect: PropTypes.func,
  value: PropTypes.bool,
  FieldName: PropTypes.string,
};

export default CheckboxField;
