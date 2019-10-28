import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Container from "@material-ui/core/Container";
import ProjectCustomToolbar from "./ProjectCustomToolbar";
import ProjectCustomToolbarSelect from "./ProjectCustomToolbarSelect";

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
    name: "ProjectId",
    label: "Project Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "ProjectName",
    label: "Project Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Type",
    label: "Type",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "StartDate",
    label: "Start Date",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "EndDate",
    label: "End Date",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Duration",
    label: "Duration",
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
  },
  {
    name: "ConfigId",
    label: "Config Id",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    ProjectId: "P-100",
    ProjectName: "CMS",
    Type: "Private",
    StartDate: "03-01-2019",
    EndDate: "03-10-2019",
    Duration: "10 months",
    Status: "Finished",
    ConfigId: "CFG-12"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "single",
  selectableRowsOnClick: true,
  customToolbar: () => {
    return <ProjectCustomToolbar />;
  },
  customToolbarSelect: () => {
    return <ProjectCustomToolbarSelect />;
  }
};

export default function ManageProjects() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </Container>
    </div>
  );
}
