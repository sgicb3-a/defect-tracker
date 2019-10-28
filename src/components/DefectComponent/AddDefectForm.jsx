import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  },
  descField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "490px"
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  }
}));

export default function AddDefectForm() {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div>
      <form className={classes.container} autoComplete="off">
        <Grid container direction="column">
          <div>
            <TextField
              required
              id="project-name"
              label="Defect Id"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="project-name"
              label="Defect Name"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <FormControl
              required
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel ref={inputLabel} htmlFor="def">
                Module
              </InputLabel>
              <Select labelWidth={labelWidth}></Select>
            </FormControl>
            <FormControl
              required
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel ref={inputLabel} htmlFor="def">
                Type
              </InputLabel>
              <Select labelWidth={labelWidth}></Select>
            </FormControl>
          </div>
          <div>
            <FormControl
              required
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel ref={inputLabel} htmlFor="def">
                Severity
              </InputLabel>
              <Select labelWidth={labelWidth}></Select>
            </FormControl>
            <FormControl
              required
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel ref={inputLabel} htmlFor="def">
                Priority
              </InputLabel>
              <Select labelWidth={labelWidth}></Select>
            </FormControl>
          </div>
          <div>
            <TextField
              required
              id="project-desc"
              label="Description"
              multiline
              rows="2"
              className={classes.descField}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              required
              id="project-desc"
              label="Steps to Re-create"
              multiline
              rows="4"
              className={classes.descField}
              margin="normal"
              variant="outlined"
            />
          </div>
          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel} htmlFor="def">
              Assigned To
            </InputLabel>
            <Select labelWidth={labelWidth}></Select>
          </FormControl>
        </Grid>
      </form>
    </div>
  );
}
