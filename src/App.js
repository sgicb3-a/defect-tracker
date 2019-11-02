import React from 'react';
import './App.css';
import Login from "./Components/CompanyAdministrationComponent/Login"
import Header from "./Components/CompanyAdministrationComponent/Header"

import 'antd/dist/antd.css';
import AddEmployee from "./Components/CompanyAdministrationComponent/AddEmployee"
import CompanyEmployee from "./Components/CompanyAdministrationComponent/CompanyEmployee"


import ManageEmployee from "./Components/CompaniAdmin/ManageEmployees/ManageEmployee"
import AddEmployeeForm from "./Components/CompaniAdmin/ManageEmployees/AddEmployeeForm"
import EmployeeCustom from "./Components/CompaniAdmin/ManageEmployees/EmployeeCustomToolbar"




function App() {
  return (
    <div className="App">
     {/* < Data /> */}

     {/* < AddEmployee /> */}
     {/* < index /> */}

     < ManageEmployee /> 
     {/* <EmployeeCustom /> */}


    </div>
  );
}

export default App;
