import React from 'react'
import { Helmet } from 'react-helmet'
import "./NewEmployeeView.css"

import HeadingAndControls from '../components/heading-and-controls'
import EmployeeTable from '../components/Table/EmployeeTable.js'
import NewEmployeeSection from '../components/new-employee-section'

const NewEmployeeView = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Exotic Honorable Shrew</title>
        <meta property="og:title" content="Exotic Honorable Shrew" />
      </Helmet>
      <HeadingAndControls rootClassName="heading-and-controls-root-class-name"></HeadingAndControls>
      <EmployeeTable></EmployeeTable>
      <NewEmployeeSection rootClassName="new-employee-section-root-class-name"></NewEmployeeSection>
    </div>
  )
}

export default NewEmployeeView
