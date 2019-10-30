import React from "react";
import Links from "@material-ui/core/Link";
import { Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import CompanyDashboard from "../DashboardComponent/Company/CompanyDashboard";
import DefectDashboard from "../DashboardComponent/Defect/DefectDashboard";
import DeveloperDashboard from "../DashboardComponent/Developer/DeveloperDashboard";
import ProjectManagerDashboard from "../DashboardComponent/ProjectManager/ProjectManagerDashboard";
import QADashboard from "../DashboardComponent/QA/QADashboard";
import ManageCompany from "../ProductAdministration/ManageCompany/ManageCompany";
import ManageEmployee from "../CompanyComponent/ManageEmployees/ManageEmployee";
import HRAllocation from "../CompanyComponent/HRAllocation/ManageHRAllocation";
import ManageModule from "../ModuleComponent/ManageModule";
import ManageSubmodule from "../ModuleComponent/SubModule/ManageSubModule";
import RoleAllocation from "../ProjectAllocationComponent/RoleAllocation/ManageRoleAllocation";
import ModuleAllocation from "../ProjectAllocationComponent/ModuleAllocation/ManageModuleAllocation";
import ManageProject from "../ProjectComponent/ManageProjects";
import ManageDefect from "../DefectComponent/ManageDefects";
import DefectPriority from "../SettingsComponent/DefectConfiguration/Priority/ManageDefectPriority";
import DefectSeverity from "../SettingsComponent/DefectConfiguration/Severity/ManageDefectSeverity";
import DefectType from "../SettingsComponent/DefectConfiguration/DefectType/ManageDefectType";
import DefectStatus from "../SettingsComponent/DefectConfiguration/DefectStatus/ManageDefectStatus";
import CompanyPrivileges from "../SettingsComponent/Privileges/CompanyPrivileges/CompanyPrivileges";
import ProjectPrivileges from "../SettingsComponent/Privileges/ProjectPrivileges/ProjectPrivileges";
import QALeadPrivileges from "../SettingsComponent/Privileges/QALeadPrivileges/QALeadPrivileges";
import TechLeadPriviles from "../SettingsComponent/Privileges/TechLeadPrivileges/TechLeadPrivileges";
import AuditLog from "../SettingsComponent/AuditLog/ManageLog";
import AddDefectForm from "../DefectComponent/AddDefectForm";
import ProductDashboard from "../DashboardComponent/Product/ProductDashboard";
import ManageLicense from "../ProductAdministration/ManageLicense/ManageLicense";
import CompanyProfile from "../SettingsComponent/CompanyProfile/CompanyProfile";
import DefectRoleFlow from "../SettingsComponent/WorkFlow/DefectRoleFlow/DefectRoleFlow";
import DefectStatusFlow from "../SettingsComponent/WorkFlow/DefectStatusFlow/DefectStatusFlow";

export default function RouteDetails() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Company</Typography>
          </Breadcrumbs>
          <CompanyDashboard />
        </Route>

        <Route path="/dashboard/company">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Company</Typography>
          </Breadcrumbs>
          <CompanyDashboard />
        </Route>

        <Route path="/dashboard/defect">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Defect</Typography>
          </Breadcrumbs>
          <DefectDashboard />
        </Route>

        <Route path="/dashboard/developer">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Developer</Typography>
          </Breadcrumbs>
          <DeveloperDashboard />
        </Route>

        <Route path="/dashboard/project-manager">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Project-Manager</Typography>
          </Breadcrumbs>
          <ProjectManagerDashboard />
        </Route>

        <Route path="/dashboard/qa">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">QA</Typography>
          </Breadcrumbs>
          <QADashboard />
        </Route>

        <Route path="/dashboard/product">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Dashboard</Links>
            <Typography color="textPrimary">Product</Typography>
          </Breadcrumbs>
          <ProductDashboard />
        </Route>

        <Route path="/product-administration/manage-license">
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

        <Route path="/product-administration/manage-company">
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

        <Route path="/company-administration/manage-employee">
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

        <Route path="/company-administration/hr-allocation">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Company Administration</Links>
            <Typography color="textPrimary">HR Allocation</Typography>
          </Breadcrumbs>
          <HRAllocation />
        </Route>

        <Route path="/manage-project">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Typography color="textPrimary">Manage Project</Typography>
          </Breadcrumbs>
          <ManageProject />
        </Route>

        <Route path="/project-allocation/role-allocation">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Project Allocation</Links>
            <Typography color="textPrimary">Role Allocation</Typography>
          </Breadcrumbs>
          <RoleAllocation />
        </Route>

        <Route path="/project-allocation/module-allocation">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Project Allocation</Links>
            <Typography color="textPrimary">Module Allocation</Typography>
          </Breadcrumbs>
          <ModuleAllocation />
        </Route>

        <Route path="/module/manage-module">
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

        <Route path="/module/manage-submodule">
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

        <Route exact path="/manage-defect">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Typography color="textPrimary">Manage Defect</Typography>
          </Breadcrumbs>
          <ManageDefect />
        </Route>

        <Route path="/manage-defect/add-defect">
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

        <Route path="/settings/company-profile">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Typography color="textPrimary">Company Profile</Typography>
          </Breadcrumbs>
          <CompanyProfile />
        </Route>

        <Route path="/settings/defect-configuration/priority">
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

        <Route path="/settings/defect-configuration/severity">
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

        <Route path="/settings/defect-configuration/type">
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

        <Route path="/settings/defect-configuration/status">
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

        <Route path="/settings/privileges/company">
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

        <Route path="/settings/privileges/project">
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

        <Route path="/settings/privileges/qa-lead">
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

        <Route path="/settings/privileges/tech-lead">
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

        <Route path="/settings/audit-log">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Links color="inherit">Home</Links>
            <Links color="inherit">Settings</Links>
            <Typography color="textPrimary">Audit Log</Typography>
          </Breadcrumbs>
          <AuditLog />
        </Route>

        <Route path="/settings/workflow/defect-role">
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

        <Route path="/settings/workflow/defect-status">
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
