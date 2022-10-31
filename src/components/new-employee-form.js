import React from "react";

import RadioSet from "./InputFields/radio-set";

import TextInputField from "./text-input-field";
import DropdownField from "./dropdown-field";
import CheckboxSet from "./InputFields/checkbox-set";
import "./new-employee-form.css";

class NewEmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      salutation: 0,
      gender: 0,
      employeeNumber: "",
      grossSalary: 0,
      profileColour: 0,
    };
  }

  HandleEmployeeChange(employeeDetails) {
    this.props.onChange(employeeDetails);
  }

  updateFirstName(firstName) {
    this.setState({
      firstName: firstName,
      lastName: this.state.lastName,
      salutation: this.state.salutation,
      gender: this.state.gender,
      employeeNumber: this.state.employeeNumber,
      grossSalary: this.state.grossSalary,
      profileColour: this.state.profileColour,
    });

    this.HandleEmployeeChange();
  }

  updateLastName(lastname) {
    this.setState({
      firstName: this.state.firstName,
      lastName: lastname,
      salutation: this.state.salutation,
      gender: this.state.gender,
      employeeNumber: this.state.employeeNumber,
      grossSalary: this.state.grossSalary,
      profileColour: this.state.profileColour,
    });

    this.HandleEmployeeChange();
  }

  updateEmployeeNumber(employeeNumber) {
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastname,
      salutation: this.state.salutation,
      gender: this.state.gender,
      employeeNumber: employeeNumber,
      grossSalary: this.state.grossSalary,
      profileColour: this.state.profileColour,
    });

    this.HandleEmployeeChange();
  }

  updateGrossSalary(grossSalary) {
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastname,
      salutation: this.state.salutation,
      gender: this.state.gender,
      employeeNumber: this.state.employeeNumber,
      grossSalary: grossSalary,
      profileColour: this.state.profileColour,
    });

    this.HandleEmployeeChange();
  }

  render() {
    return (
      <div
        className={`new-employee-form-container ${this.props.rootClassName} `}
      >
        <form className="new-employee-form-form">
          <div className="new-employee-form-container1">
            <div className="new-employee-form-container2">
              <TextInputField
                FieldName="First Name(s)"
                Mandatory={true}
                rootClassName="text-input-field-root-class-name"
                value={this.props?.selectedEmployee.firstNames ?? ""}
                className=""
                onChange={(firstName) => this.updateFirstName(firstName)}
              ></TextInputField>
              <TextInputField
                FieldName="Last Name"
                rootClassName="text-input-field-root-class-name3"
                Mandatory={true}
                value={this.props?.selectedEmployee.lastName ?? ""}
                className=""
                onChange={(lastname) => this.updateLastName(lastname)}
              ></TextInputField>
              <DropdownField
                FieldName="Salutation"
                rootClassName="dropdown-field-root-class-name"
                Mandatory={true}
                value={this.props?.selectedEmployee.salutation ?? ""}
                className=""
              ></DropdownField>
              <RadioSet
                FieldName="Gender"
                Mandatory={true}
                value={this.props?.selectedEmployee.gender ?? ""}
              ></RadioSet>
              <TextInputField
                FieldName="Employee Number"
                Mandatory={true}
                value={String(
                  this.props?.selectedEmployee.employeeNumber ?? ""
                )}
                rootClassName="text-input-field-root-class-name2"
                className=""
                onChange={(employeeNumber) =>
                  this.updateEmployeeNumber(employeeNumber)
                }
              ></TextInputField>
            </div>
            <div className="new-employee-form-container3">
              <TextInputField
                FieldName="Full Name"
                value={
                  (this.props?.selectedEmployee.firstName ?? "") +
                  " " +
                  (this.props?.selectedEmployee.lastName ?? "")
                }
                rootClassName="text-input-field-root-class-name1"
                isDisabled={true}
                className=""
              ></TextInputField>
              <TextInputField
                FieldName="Gross Salary $PY"
                value={String(this.props?.selectedEmployee.grossSalary ?? "")}
                rootClassName="text-input-field-root-class-name2"
                className=""
                onChange={(grossSalary) => this.updateGrossSalary(grossSalary)}
                type={"number"}
              ></TextInputField>
              <CheckboxSet
                FieldName="Employee Profile Colour"
                values={[
                  { id: "Green", selected: false, colour: "Green" },
                  { id: "Blue", selected: false, colour: "Blue" },
                  { id: "Red", selected: false, colour: "Red" },
                  { id: "Default", selected: true, colour: "Black" },
                ]}
                selectedValue={this.props?.selectedEmployee.grossSalary}
                colourChangeHandler={this.props.colourChangeHandler}
              ></CheckboxSet>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewEmployeeForm;
