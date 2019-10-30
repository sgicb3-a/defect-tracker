import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  },
  button: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
    width: "230px"
  },
  input: {
    display: "none"
  }
}));

export default function AddEmployeeForm() {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div>
      <form className={classes.container} autoComplete="off">
        <Grid container justify="space-between">
          <TextField
            required
            id="project-name"
            label="Employee Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="project-desc"
            label="Email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <FormControl required className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="defect-severity">
              Designation
            </InputLabel>
            <Select labelWidth={labelWidth}></Select>
          </FormControl>
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
              Upload Employee Photo
            </Button>
          </label>
        </Grid>
      </form>
    </div>
  );
}
