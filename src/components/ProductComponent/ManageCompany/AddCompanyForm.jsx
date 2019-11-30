import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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
  paper: {
    color: theme.palette.text.secondary,
    borderRadius: "4px",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    marginTop: theme.spacing(5),
    margin: theme.spacing(3),
    padding: theme.spacing(5)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px"
  },
  descField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    margin: theme.spacing(1),
    width: "363px"
  },
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    margin: theme.spacing(1),
    width: "230px",
    textAlign: "left"
  },
  buttonUpload: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2.5),
    marginLeft: theme.spacing(1),
    width: "230px"
  },
  input: {
    display: "none"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    width: "120px"
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
  const [value, setValue] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2019-10-24T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Container className={classes.container}>
        <Paper
          className={classes.paper}
          components={{
            Container: props => <Paper {...props} elevation={4} />
          }}
        >
          <form className={classes.container} autoComplete="off">
            <Grid container direction="column" alignItems="center">
              <div>
                <TextField
                  required
                  id="company-name"
                  label="Company Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="abbreviation"
                  label="Abbreviation"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="reg-no"
                  label="Reg No"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </div>

              <div>
                <TextField
                  required
                  type="email"
                  id="cpmpany-email"
                  label="Company Email"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  required
                  id="contact-person"
                  label="Contact Person"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  required
                  id="contact-no"
                  label="Contact No"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </div>

              <div>
                <FormControl required className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="defect-severity">
                    License Type
                  </InputLabel>
                  <Select
                    labelWidth={labelWidth}
                    value={value}
                    onChange={handleChange}
                  >
                    <MenuItem value="Platinum">Platinum</MenuItem>
                    <MenuItem value="Gold">Gold</MenuItem>
                    <MenuItem value="Silver">Silver</MenuItem>
                    <MenuItem value="Bronze">Bronze</MenuItem>
                  </Select>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="start-date"
                    label="Start Date"
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
                  id="admin-name"
                  label="Admin Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </div>

              <div>
                <TextField
                  required
                  type="email"
                  id="admin-email"
                  label="Admin Email"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  required
                  id="admin-username"
                  label="Admin Username"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  required
                  type="password"
                  id="admin-password"
                  label="Admin Password"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </div>
            </Grid>
            <Grid container justify="flex-end">
              <Button
                className={classes.button}
                color="primary"
                component={Link}
                to={"/defect-tracker/product-administration/manage-company"}
              >
                Cancel
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                component={Link}
                to={"/defect-tracker/product-administration/manage-company"}
              >
                Add
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
