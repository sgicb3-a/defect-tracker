import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBFooter, MDBNavbarBrand, MDBNavbarNav, MDBDataTable, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn,   MDBView, MDBContainer, MDBFormInline } from "mdbreact";
import "./CompanyEmployee.js";
import 'antd/dist/antd.css';
import "./Login.css";

class LoginPage extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      
      <div id="apppage">
    
    
        <Router>
          <div>
            <MDBNavbar
              color="primary-color"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >



              <MDBContainer>
              <MDBNavbarBrand>
                  <strong className="white-text">DEFECT</strong>
                </MDBNavbarBrand>

                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav left>
                    
                  </MDBNavbarNav>
                  
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>


           
<h1>Vinoraj</h1>
            </MDBContainer>

          </MDBMask>
        </MDBView>

      
      </div>
    );
  }
}

export default LoginPage;