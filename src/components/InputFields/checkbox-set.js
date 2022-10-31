import React from "react";
import CheckboxField from "./checkbox-field";

class CheckboxSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValues: this.props.values,
    };
  }

  setSelection(checkBoxState) {
    var checkboxIndex = this.state.selectedValues.findIndex(
      (obj) => obj.id === checkBoxState.id
    );
    this.state.selectedValues.map((obj) => (obj.selected = false));
    this.state.selectedValues[checkboxIndex].selected = checkBoxState.selected;
    this.setState(this.state.selectedValues);
    this.props.colourChangeHandler(checkBoxState.colour);
  }

  render() {
    return (
      <div className="input-field-container">
        <span className="text-input-field-text">{this.props.FieldName}</span>
        {this.state.selectedValues?.map((selectedValue) => {
          return (
            <CheckboxField
              key={selectedValue.id}
              dataObject={selectedValue}
              onSelect={(e) => this.setSelection(e)}
              value={selectedValue.selected}
            ></CheckboxField>
          );
        })}
      </div>
    );
  }
}

export default CheckboxSet;
