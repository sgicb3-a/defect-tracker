import React from "react";
import Links from "@material-ui/core/Link";
import { Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import CompanyDashboard from "../DashboardComponent/Company/CompanyDashboard";
import DeveloperDashboard from "../DashboardComponent/Developer/DeveloperDashboard";
import ProjectManagerDashboard from "../DashboardComponent/ProjectManager/ProjectManagerDashboard";
import QADashboard from "../DashboardComponent/QA/QADashboard";
import ManageCompany from "../ProductComponent/ManageCompany/ManageCompany";
import AddCompany from "../ProductComponent/ManageCompany/AddCompanyForm";
import EditCompany from "../ProductComponent/ManageCompany/EditCompanyForm";
import ManageEmployee from "../CompanyComponent/ManageEmployees/ManageEmployee";
import AddEmployee from "../CompanyComponent/ManageEmployees/AddEmployeeForm";
import EditEmployee from "../CompanyComponent/ManageEmployees/EditEmployeeForm";
import AddClient from "../CompanyComponent/ManageClients/AddClientForm";
import EditClient from "../CompanyComponent/ManageClients/EditClientForm";
import ManageEmployeeDesignation from "../SettingsComponent/EmployeeConfiguration/ManageEmployeeDesignation";
import ProjectAllocation from "../AllocationComponent/ProjectAllocation/ManageProjectAllocation";
import ManageModule from "../ModuleComponent/ManageModule";
import ManageSubmodule from "../ModuleComponent/SubModule/ManageSubModule";
import RoleAllocation from "../AllocationComponent/RoleAllocation/ManageRoleAllocation";
import ModuleAllocation from "../AllocationComponent/ModuleAllocation/ManageModuleAllocation";
import ManageProject from "../ProjectComponent/ManageProjects";
import AddProject from "../ProjectComponent/AddProjectForm";
import EditProject from "../ProjectComponent/EditProjectForm";
import ManageDefect from "../DefectComponent/ManageDefects";
import DefectPriority from "../SettingsComponent/DefectConfiguration/Priority/ManageDefectPriority";
import DefectSeverity from "../SettingsComponent/DefectConfiguration/Severity/ManageDefectSeverity";
import DefectType from "../SettingsComponent/DefectConfiguration/DefectType/ManageDefectType";
import DefectStatus from "../SettingsComponent/DefectConfiguration/DefectStatus/ManageDefectStatus";
import CompanyPrivileges from "../SettingsComponent/Privileges/CompanyPrivileges/CompanyPrivileges";
import ProjectPrivileges from "../SettingsComponent/Privileges/ProjectPrivileges/ProjectPrivileges";
import QALeadPrivileges from "../SettingsComponent/Privileges/QALeadPrivileges/QALeadPrivileges";
import TechLeadPriviles from "../SettingsComponent/Privileges/TechLeadPrivileges/TechLeadPrivileges";
import DefectLog from "../SettingsComponent/DefectLog/ManageLog";
import AddDefectForm from "../DefectComponent/AddDefectForm";
import EditDefectForm from "../DefectComponent/EditDefectForm";
import ProductDashboard from "../DashboardComponent/Product/ProductDashboard";
import ManageLicense from "../ProductComponent/ManageLicense/ManageLicense";
import AddLicense from "../ProductComponent/ManageLicense/AddLicenseForm";
import EditLicense from "../ProductComponent/ManageLicense/EditLicenseForm";
import ManageFeature from "../SettingsComponent/LicenseConfiguration/ManageFeature";
import AddFeature from "../SettingsComponent/LicenseConfiguration/AddFeatureForm";
import EditFeature from "../SettingsComponent/LicenseConfiguration/EditFeatureForm";
import DefectRoleFlow from "../SettingsComponent/WorkFlow/DefectRoleFlow/DefectRoleFlow";
import DefectStatusFlow from "../SettingsComponent/WorkFlow/DefectStatusFlow/DefectStatusFlow";
import ManageClient from "../CompanyComponent/ManageClients/ManageClient";
import UserProfile from "../SettingsComponent/UserProfile/UserProfile";
import ManageProjectRole from "../SettingsComponent/ProjectConfiguration/Role/ManageProjectRole";
import ManageProjectStatus from "../SettingsComponent/ProjectConfiguration/ProjectStatus/ManageProjectStatus";

export default function RouteDetails({ isDark }) {
  return (
    <div>
      <Switch>
        <Route path="/defect-tracker/dashboard/company">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Company</Typography>
          </Breadcrumbs>
          <CompanyDashboard isDark={isDark} />
        </Route>

        <Route path="/defect-tracker/dashboard/developer">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Developer</Typography>
          </Breadcrumbs>
          <DeveloperDashboard isDark={isDark} />
        </Route>

        <Route path="/defect-tracker/dashboard/project-manager">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Project-Manager</Typography>
          </Breadcrumbs>
          <ProjectManagerDashboard isDark={isDark} />
        </Route>

        <Route path="/defect-tracker/dashboard/qa">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">QA</Typography>
          </Breadcrumbs>
          <QADashboard isDark={isDark} />
        </Route>

        <Route path="/defect-tracker/dashboard/product">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Product</Typography>
          </Breadcrumbs>
          <ProductDashboard isDark={isDark} />
        </Route>

        <Route
          exact
          path="/defect-tracker/product-administration/manage-license"
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Product Adminstration</Links>
            <Typography color="textPrimary">Manage License</Typography>
          </Breadcrumbs>
          <ManageLicense />
        </Route>

        <Route path="/defect-tracker/product-administration/manage-license/add-license">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Product Adminstration</Links>
            <Links color="inherit">Manage License</Links>
            <Typography color="textPrimary">Add License</Typography>
          </Breadcrumbs>
          <AddLicense />
        </Route>

        <Route
          exact
          path="/defect-tracker/product-administration/manage-license/edit-license"
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Product Adminstration</Links>
            <Links color="inherit">Manage License</Links>
            <Typography color="textPrimary">Edit License</Typography>
          </Breadcrumbs>
          <EditLicense />
        </Route>

        <Route
          exact
          path="/defect-tracker/product-administration/manage-company"
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Product Adminstration</Links>
            <Typography color="textPrimary">Manage Company</Typography>
          </Breadcrumbs>
          <ManageCompany />
        </Route>

        <Route path="/defect-tracker/product-administration/manage-company/add-company">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Product Adminstration</Links>
            <Links color="inherit">Manage Company</Links>
            <Typography color="textPrimary">Add Company</Typography>
          </Breadcrumbs>
          <AddCompany />
        </Route>

        <Route
          exact
          path="/defect-tracker/product-administration/manage-company/edit-company"
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Product Adminstration</Links>
            <Links color="inherit">Manage Company</Links>
            <Typography color="textPrimary">Edit Company</Typography>
          </Breadcrumbs>
          <EditCompany />
        </Route>

        <Route
          exact
          path="/defect-tracker/company-administration/manage-employee"
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Administration</Links>
            <Typography color="textPrimary">Manage Employee</Typography>
          </Breadcrumbs>
          <ManageEmployee />
        </Route>

        <Route path="/defect-tracker/company-administration/manage-employee/add-employee">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Administration</Links>
            <Links color="inherit">Manage Employee</Links>
            <Typography color="textPrimary">Add Employee</Typography>
          </Breadcrumbs>
          <AddEmployee />
        </Route>

        <Route path="/defect-tracker/company-administration/manage-employee/edit-employee">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Administration</Links>
            <Links color="inherit">Manage Employee</Links>
            <Typography color="textPrimary">Edit Employee</Typography>
          </Breadcrumbs>
          <EditEmployee />
        </Route>

        <Route
          exact
          path="/defect-tracker/company-administration/manage-client"
        >
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Adminstration</Links>
            <Typography color="textPrimary">Manage Client</Typography>
          </Breadcrumbs>
          <ManageClient />
        </Route>

        <Route path="/defect-tracker/company-administration/manage-client/add-client">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Administration</Links>
            <Links color="inherit">Manage Client</Links>
            <Typography color="textPrimary">Add Client</Typography>
          </Breadcrumbs>
          <AddClient />
        </Route>

        <Route path="/defect-tracker/company-administration/manage-client/edit-client">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Administration</Links>
            <Links color="inherit">Manage Client</Links>
            <Typography color="textPrimary">Edit Client</Typography>
          </Breadcrumbs>
          <EditClient />
        </Route>

        <Route exact path="/defect-tracker/manage-project">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Typography color="textPrimary">Manage Project</Typography>
          </Breadcrumbs>
          <ManageProject />
        </Route>

        <Route path="/defect-tracker/manage-project/add-project">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Manage Project</Links>
            <Typography color="textPrimary">Add Project</Typography>
          </Breadcrumbs>
          <AddProject />
        </Route>

        <Route path="/defect-tracker/manage-project/edit-project">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Manage Project</Links>
            <Typography color="textPrimary">Edit Project</Typography>
          </Breadcrumbs>
          <EditProject />
        </Route>

        <Route path="/defect-tracker/module/manage-module">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Module</Links>
            <Typography color="textPrimary">Manage Module</Typography>
          </Breadcrumbs>
          <ManageModule />
        </Route>

        <Route path="/defect-tracker/module/manage-submodule">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Module</Links>
            <Typography color="textPrimary">Manage Submodule</Typography>
          </Breadcrumbs>
          <ManageSubmodule />
        </Route>

        <Route path="/defect-tracker/allocation/project-allocation">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Allocation</Links>
            <Typography color="textPrimary">Project Allocation</Typography>
          </Breadcrumbs>
          <ProjectAllocation />
        </Route>

        <Route path="/defect-tracker/allocation/role-allocation">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Allocation</Links>
            <Typography color="textPrimary">Role Allocation</Typography>
          </Breadcrumbs>
          <RoleAllocation />
        </Route>

        <Route path="/defect-tracker/allocation/module-allocation">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Allocation</Links>
            <Typography color="textPrimary">Module Allocation</Typography>
          </Breadcrumbs>
          <ModuleAllocation />
        </Route>

        <Route exact path="/defect-tracker/manage-defect">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Typography color="textPrimary">Manage Defect</Typography>
          </Breadcrumbs>
          <ManageDefect />
        </Route>

        <Route path="/defect-tracker/manage-defect/add-defect">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Manage Defect</Links>
            <Typography color="textPrimary">Add Defect</Typography>
          </Breadcrumbs>
          <AddDefectForm />
        </Route>

        <Route path="/defect-tracker/manage-defect/edit-defect">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Manage Defect</Links>
            <Typography color="textPrimary">Edit Defect</Typography>
          </Breadcrumbs>
          <EditDefectForm />
        </Route>

        <Route path="/defect-tracker/settings/user-profile">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Typography color="textPrimary">User Profile</Typography>
          </Breadcrumbs>
          <UserProfile />
        </Route>

        <Route exact path="/defect-tracker/settings/license-configuration">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Typography color="textPrimary">License Configuration</Typography>
          </Breadcrumbs>
          <ManageFeature />
        </Route>

        <Route path="/defect-tracker/settings/license-configuration/add-feature">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">License Configuration</Links>
            <Typography color="textPrimary">Add Feature</Typography>
          </Breadcrumbs>
          <AddFeature />
        </Route>

        <Route path="/defect-tracker/settings/license-configuration/edit-feature">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">License Configuration</Links>
            <Typography color="textPrimary">Edit Feature</Typography>
          </Breadcrumbs>
          <EditFeature />
        </Route>

        <Route path="/defect-tracker/settings/employee-configuration">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Typography color="textPrimary">Employee Configuration</Typography>
          </Breadcrumbs>
          <ManageEmployeeDesignation />
        </Route>

        <Route path="/defect-tracker/settings/project-configuration/role">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Project-Configuration</Links>
            <Typography color="textPrimary">Role</Typography>
          </Breadcrumbs>
          <ManageProjectRole />
        </Route>

        <Route path="/defect-tracker/settings/project-configuration/status">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Project-Configuration</Links>
            <Typography color="textPrimary">Status</Typography>
          </Breadcrumbs>
          <ManageProjectStatus />
        </Route>

        <Route path="/defect-tracker/settings/defect-configuration/priority">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Defect-Configuration</Links>
            <Typography color="textPrimary">Priority</Typography>
          </Breadcrumbs>
          <DefectPriority />
        </Route>

        <Route path="/defect-tracker/settings/defect-configuration/severity">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Defect-Configuration</Links>
            <Typography color="textPrimary">Severity</Typography>
          </Breadcrumbs>
          <DefectSeverity />
        </Route>

        <Route path="/defect-tracker/settings/defect-configuration/type">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Defect-Configuration</Links>
            <Typography color="textPrimary">Type</Typography>
          </Breadcrumbs>
          <DefectType />
        </Route>

        <Route path="/defect-tracker/settings/defect-configuration/status">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Defect-Configuration</Links>
            <Typography color="textPrimary">Status</Typography>
          </Breadcrumbs>
          <DefectStatus />
        </Route>

        <Route path="/defect-tracker/settings/privileges/company">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">privileges</Links>
            <Typography color="textPrimary">Company</Typography>
          </Breadcrumbs>
          <CompanyPrivileges />
        </Route>

        <Route path="/defect-tracker/settings/privileges/project">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">privileges</Links>
            <Typography color="textPrimary">Project</Typography>
          </Breadcrumbs>
          <ProjectPrivileges />
        </Route>

        <Route path="/defect-tracker/settings/privileges/qa-lead">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">privileges</Links>
            <Typography color="textPrimary">QA Lead</Typography>
          </Breadcrumbs>
          <QALeadPrivileges />
        </Route>

        <Route path="/defect-tracker/settings/privileges/tech-lead">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">privileges</Links>
            <Typography color="textPrimary">Tech Lead</Typography>
          </Breadcrumbs>
          <TechLeadPriviles />
        </Route>

        <Route path="/defect-tracker/settings/defect-log">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Typography color="textPrimary">Defect Log</Typography>
          </Breadcrumbs>
          <DefectLog />
        </Route>

        <Route path="/defect-tracker/settings/workflow/defect-role">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Workflow</Links>
            <Typography color="textPrimary">Defect Role</Typography>
          </Breadcrumbs>
          <DefectRoleFlow />
        </Route>

        <Route path="/defect-tracker/settings/workflow/defect-status">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Links color="inherit">Workflow</Links>
            <Typography color="textPrimary">Defect Status</Typography>
          </Breadcrumbs>
          <DefectStatusFlow />
        </Route>
      </Switch>
    </div>
  );
}
