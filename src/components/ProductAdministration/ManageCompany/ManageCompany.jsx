import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import CompanyCustomToolbar from "./CompanyCustomToolbar";
import CompanyCustomToolbarSelect from "./CompanyCustomToolbarSelect";

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
    name: "CompanyName",
    label: "Company Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Abbreviation",
    label: "Abbreviation",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "RegistrationId",
    label: "Registration Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "LicensePeriod",
    label: "License Period",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "ITAdmin",
    label: "IT Admin",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    CompanyName: "Samuel Gnanam IT Centre",
    Abbreviation: "SGIC",
    RegistrationId: "LK-254",
    LicensePeriod: "2 Years",
    ITAdmin: "Thiru"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  customToolbar: () => {
    return <CompanyCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <CompanyCustomToolbarSelect />;
  }
};

export default function ManageCompany() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
