import React from 'react'

import NewEmployeeControls from './new-employee-controls'
import NewEmployeeForm from './new-employee-form'
import './new-employee-section.css'

class NewEmployeeSection extends React.Component
{
   constructor(props)
   {
    super(props);
    this.state = {
      selectedColor: 'Black',
      employeeDetails: {}
    }
   }

   HandleColourChange(colour)
   {
    this.setState({selectedColor: colour});
   }

   HandleEmployeeChange(employeeDetails)
   {
    this.setState({
      selectedColor: this.state.selectedColor,
      employeeDetails: employeeDetails
    })
   }

   SaveEmployee()
   {
    this.props.saveEmployee(this.state.employeeDetails)
   }

   CancelEmployee()
   {

   }

   render()
   {
    return (
      <div className={`new-employee-section-container ${this.props.rootClassName} `}>
        <div className="new-employee-section-container1">
          <h1 className="">{this.props.heading}</h1>
        </div>
        <div className="new-employee-section-container2">
          <NewEmployeeControls
            rootClassName="new-employee-controls-root-class-name"
            className=""
            color={this.state.selectedColor}
            onSave={() => this.SaveEmployee()}
            onCancel={this.CancelEmployee}
          ></NewEmployeeControls>
        </div>
        <NewEmployeeForm
          selectedEmployee={this.props.selectedEmployee}
          colourChangeHandler={(color) => this.HandleColourChange(color)}
          rootClassName="new-employee-form-root-class-name"
          className=""
          onChange={(employeeDetails) => this.HandleEmployeeChange(employeeDetails)}
        ></NewEmployeeForm>
      </div>
    )
   }
}

export default NewEmployeeSection
