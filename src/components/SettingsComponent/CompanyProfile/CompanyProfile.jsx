import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  paper: {
    color: theme.palette.text.secondary,
    textAlign: "left",
    borderRadius: "4px",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    marginTop: theme.spacing(5),
    margin: theme.spacing(3),
    padding: theme.spacing(5)
  }
}));

export default function CompanyProfile() {
  const classes = useStyles();
  return (
    <div>
      <Paper
        className={classes.paper}
        components={{
          Container: props => <Paper {...props} elevation={4} />
        }}
      >
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Company Name</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Company Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Company Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Company Email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Company Website</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Company Website"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Company Logo</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Save
          </button>
        </form>
      </Paper>
    </div>
  );
}
