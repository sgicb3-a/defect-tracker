import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import DefectCustomToolbar from "./DefectCustomToolbar";
import DefectCustomToolbarSelect from "./DefectCustomToolbarSelect";

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
    name: "DefectId",
    label: "Defect Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "ModuleName",
    label: "Module Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Severity",
    label: "Severity",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Priority",
    label: "Priority",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "TypeId",
    label: "Type Id",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Status",
    label: "Status",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    DefectId: "D-100",
    ModuleName: "UI",
    Severity: "High",
    Priority: "Urgent",
    TypeId: "T-120",
    Status: "New"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  customToolbar: () => {
    return <DefectCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <DefectCustomToolbarSelect />;
  }
};

export default function ManageDefects() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
