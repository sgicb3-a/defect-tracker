import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import HRAllocationCustomToolbarSelect from "./HRAllocationCustomToolbarSelect";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  container: {
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  }
}));

const columns = [
  {
    name: "EmployeeId",
    label: "Employee Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "Name",
    label: "Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Role",
    label: "Role",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Availability",
    label: "Availability",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    EmployeeId: "E-100",
    Name: "Bals",
    Role: "Developer",
    Availability: "30%"
  },
  {
    EmployeeId: "E-101",
    Name: "Sankar",
    Role: "QA",
    Availability: "70%"
  }
];

const options = {
  filterType: "checkbox",
  selectableRowsOnClick: true,
  customToolbarSelect: () => {
    return <HRAllocationCustomToolbarSelect />;
  }
};

export default function ManageHRAllocation() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <Grid container justify="flex-start">
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="defect-severity">Project</InputLabel>
            <Select></Select>
          </FormControl>
        </Grid>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
