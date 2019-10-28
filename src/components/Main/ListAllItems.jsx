import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ProductIcon from "@material-ui/icons/LocalParking";
import CompanyIcon from "@material-ui/icons/Business";
import ModuleIcon from "@material-ui/icons/Extension";
import AllocationIcon from "@material-ui/icons/DoubleArrow";
import ProjectIcon from "@material-ui/icons/Assignment";
import DefectIcon from "@material-ui/icons/BugReport";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  },
  dualNested: {
    paddingLeft: theme.spacing(6)
  }
}));

export default function ListAllItems() {
  const classes = useStyles();
  const [openDashboard, setOpenDashboard] = React.useState(false);
  const [
    openCompanyAdminstration,
    setOpenCompanyAdminstration
  ] = React.useState(false);
  const [openModule, setOpenModule] = React.useState(false);
  const [openSettings, setOpenSettings] = React.useState(false);
  const [openDefectConfiguration, setOpenDefectConfiguration] = React.useState(
    false
  );
  const [openPrivileges, setOpenPrivileges] = React.useState(false);

  const handleDashboardClick = () => {
    setOpenDashboard(!openDashboard);
  };

  const handleCompanyAdminstrationClick = () => {
    setOpenCompanyAdminstration(!openCompanyAdminstration);
  };

  const handleModuleClick = () => {
    setOpenModule(!openModule);
  };

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };

  const handleDefectConfigurationClick = () => {
    setOpenDefectConfiguration(!openDefectConfiguration);
  };

  const handlePrivilegesClick = () => {
    setOpenPrivileges(!openPrivileges);
  };

  return (
    <div>
      <List>
        <ListItem button onClick={handleDashboardClick}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {openDashboard ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openDashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={"/dashboard/company"}
            >
              <ListItemText primary="Company" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={"/dashboard/defect"}
            >
              <ListItemText primary="Defect" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={"/dashboard/developer"}
            >
              <ListItemText primary="Developer" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={"/dashboard/project-manager"}
            >
              <ListItemText primary="Project Manager" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={"/dashboard/qa"}
            >
              <ListItemText primary="QA" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to={"/product-administration"}>
          <ListItemIcon>
            <ProductIcon />
          </ListItemIcon>
          <ListItemText primary="Product Adminstration" />
        </ListItem>
        <ListItem button onClick={handleCompanyAdminstrationClick}>
          <ListItemIcon>
            <CompanyIcon />
          </ListItemIcon>
          <ListItemText primary="Company Adminstration" />
          {openCompanyAdminstration ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCompanyAdminstration} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={"/company-administration/manage-company"}
            >
              <ListItemText primary="Manage Company" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={"/company-administration/manage-employee"}
            >
              <ListItemText primary="Manage Employee" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={"/company-administration/hr-allocation"}
            >
              <ListItemText primary="HR Allocation" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleModuleClick}>
          <ListItemIcon>
            <ModuleIcon />
          </ListItemIcon>
          <ListItemText primary="Module" />
          {openModule ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openModule} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={"/module/manage-module"}
            >
              <ListItemText primary="Manage Module" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={"/module/manage-submodule"}
            >
              <ListItemText primary="Manage Submodule" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to={"/project-allocation"}>
          <ListItemIcon>
            <AllocationIcon />
          </ListItemIcon>
          <ListItemText primary="Project Allocation" />
        </ListItem>
        <ListItem button component={Link} to={"/manage-project"}>
          <ListItemIcon>
            <ProjectIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Project" />
        </ListItem>
        <ListItem button component={Link} to={"/manage-defect"}>
          <ListItemIcon>
            <DefectIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Defect" />
        </ListItem>
        <ListItem button onClick={handleSettingsClick}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          {openSettings ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSettings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={handleDefectConfigurationClick}
            >
              <ListItemText primary="Defect Configuration" />
              {openDefectConfiguration ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openDefectConfiguration} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.dualNested}
                  component={Link}
                  to={"/settings/defect-configuration/priority"}
                >
                  <ListItemText primary="Priority" />
                </ListItem>
                <ListItem
                  button
                  className={classes.dualNested}
                  component={Link}
                  to={"/settings/defect-configuration/severity"}
                >
                  <ListItemText primary="Severity" />
                </ListItem>
                <ListItem
                  button
                  className={classes.dualNested}
                  component={Link}
                  to={"/settings/defect-configuration/type"}
                >
                  <ListItemText primary="Type" />
                </ListItem>
                <ListItem
                  button
                  className={classes.dualNested}
                  component={Link}
                  to={"/settings/defect-configuration/status"}
                >
                  <ListItemText primary="Status" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={classes.nested}
              onClick={handlePrivilegesClick}
            >
              <ListItemText primary="Privileges" />
              {openPrivileges ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openPrivileges} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.dualNested}
                  component={Link}
                  to={"/settings/privileges/company"}
                >
                  <ListItemText primary="Company" />
                </ListItem>
                <ListItem
                  button
                  className={classes.dualNested}
                  component={Link}
                  to={"/settings/privileges/project"}
                >
                  <ListItemText primary="Project" />
                </ListItem>
                <ListItem
                  button
                  className={classes.dualNested}
                  component={Link}
                  to={"/settings/privileges/qa-lead"}
                >
                  <ListItemText primary="QA Lead" />
                </ListItem>
                <ListItem
                  button
                  className={classes.dualNested}
                  component={Link}
                  to={"/settings/privileges/tech-lead"}
                >
                  <ListItemText primary="Tech Lead" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to={"/settings/audit-log"}
            >
              <ListItemText primary="Audit Log" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
