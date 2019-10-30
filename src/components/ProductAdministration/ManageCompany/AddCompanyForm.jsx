import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

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
  },
  dateField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  }
}));

export default function AddCompanyForm() {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2019-10-24T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      <form className={classes.container} autoComplete="off">
        <Grid container justify="space-between">
          <TextField
            required
            id="project-name"
            label="Company Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="project-name"
            label="Abbreviation"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="project-name"
            label="Reg No"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="project-name"
            label="IT Admin"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <FormControl required className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="defect-severity">
              License Type
            </InputLabel>
            <Select labelWidth={labelWidth}></Select>
          </FormControl>
          <FormControl required className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="defect-severity">
              License Period
            </InputLabel>
            <Select labelWidth={labelWidth}></Select>
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Start Date"
              className={classes.dateField}
              value={selectedDate}
              onChange={handleDateChange}
              format="MM/dd/yyyy"
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="End Date"
              className={classes.dateField}
              value={selectedDate}
              onChange={handleDateChange}
              format="MM/dd/yyyy"
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            required
            id="project-desc"
            label="Email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="project-desc"
            label="Description"
            multiline
            rows="2"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </form>
    </div>
  );
}
