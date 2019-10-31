import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import Button from "@material-ui/core/Button";
import ColorPicker from "./ColorPicker";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  textField: {
    marginRight: theme.spacing(3),
    width: "250px"
  },
  input: {
    display: "none"
  },
  table: {
    minWidth: 700
  },
  button: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
    width: "250px"
  }
}));


export default function EditSeverityForm() {
  const classes = useStyles();

  return (
    <div>
           <form className={classes.container} autoComplete="off">
        <Grid container justify="space-between">
        <TextField
            required
            id="project-name"
            label="Severity"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="project-name"
            label="Description"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="outlined"
              component="span"
              className={classes.button}
            >
              Upload Icon
            </Button>
          </label>
          <ColorPicker />
        </Grid>
      </form>
    </div>
  );
}