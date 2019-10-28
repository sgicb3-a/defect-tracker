import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import SubModuleCustomToolbar from "./SubModuleCustomToolbar";
import SubModuleCustomToolbarSelect from "./SubModuleCustomToolbarSelect";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  container: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const columns = [
  {
    name: "ModuleId",
    label: "Module Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "SubModuleId",
    label: "SubModule Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "SubModuleName",
    label: "SubModule Name",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    ModuleId: "M-001",
    SubModuleId: "SM-001",
    SubModuleName: "Project Menu"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  customToolbar: () => {
    return <SubModuleCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <SubModuleCustomToolbarSelect />;
  }
};

export default function ManageSubModule() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
