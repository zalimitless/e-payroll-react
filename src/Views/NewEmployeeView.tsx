import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./NewEmployeeView.css";

import { API } from "../API/Endpoints/EmployeesTable.ts";
import ApiController from "../API/ApiController.ts";

import HeadingAndControls from "../components/heading-and-controls";
import EmployeeTable from "../components/Table/EmployeeTable.js";
import NewEmployeeSection from "../components/new-employee-section";

interface iSate {
  pulledData: any;
  selectedEmployee: any;
}

class NewEmployeeView extends React.Component<{}, iSate> {
  constructor(props) {
    super(props);
    this.state = { pulledData: [], selectedEmployee: {} };
  }

  componentDidMount() {
    ApiController.CallApi(API.GetTable, (data) =>
      this.setState({
        pulledData: data,
        selectedEmployee: this.state.selectedEmployee,
      })
    );
  }

  getEmployeeDetails(employeeNumber?) {
    ApiController.CallApi(API.GetEmployee(employeeNumber), (data) =>
      this.setState({
        pulledData: this.state.pulledData,
        selectedEmployee: data,
      })
    );
  }

  saveEmployee(employeeDetails) {
    ApiController.CallApi(
      API.UpdateOrAddEmployee,
      (data) =>
        this.setState({
          pulledData: this.state.pulledData,
          selectedEmployee: data,
        }),
      {
        params: {
          newEmployee: employeeDetails,
          employeeNumber: employeeDetails.employeeNumber,
        },
      }
    );
  }

  render() {
    return (
      <div className="home-container">
        <Helmet>
          <title>Exotic Honorable Shrew</title>
          <meta property="og:title" content="Exotic Honorable Shrew" />
        </Helmet>
        <HeadingAndControls rootClassName="heading-and-controls-root-class-name"></HeadingAndControls>
        <EmployeeTable
          data={this.state.pulledData}
          selectedElement={(employeeNumber) =>
            this.getEmployeeDetails(employeeNumber)
          }
        ></EmployeeTable>
        <NewEmployeeSection
          selectedEmployee={this.state.selectedEmployee}
          saveEmployee={(employeeDetails) => {
            this.saveEmployee(employeeDetails);
          }}
          rootClassName="new-employee-section-root-class-name"
        ></NewEmployeeSection>
      </div>
    );
  }
}

export default NewEmployeeView;
