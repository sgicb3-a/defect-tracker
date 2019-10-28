import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  }
}));

export default function AddModuleForm() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.container} autoComplete="off">
        <Grid container justify="space-between">
          <TextField
            required
            id="project-name"
            label="Module Id"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="project-name"
            label="Module Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </form>
    </div>
  );
}
