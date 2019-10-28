import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ColorPicker from "./ColorPicker";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

function createData(priority, desc, icon, color, edit, del) {
  return { priority, desc, icon, color, edit, del };
}

const rows = [createData("Urgent", "Immediate fix needed")];

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
  },
  fabStyle: {
    marginTop: theme.spacing(3)
  }
}));

export default function PriorityConfiguration() {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  return (
    <div>
      <div>
        <Grid container justify="flex-start">
          <Fab
            color="primary"
            aria-label="add"
            className={classes.fabStyle}
            size="small"
            onClick={handleAddOpen}
          >
            <AddIcon />
          </Fab>
        </Grid>
      </div>
      <Dialog
        open={openAdd}
        onClose={handleAddClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Add Priority</DialogTitle>
        <Divider />
        <DialogContent>
          <form className={classes.container} autoComplete="off">
            <Grid container justify="space-between">
              <TextField
                required
                id="project-name"
                label="Priority"
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Priority</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Icon</StyledTableCell>
              <StyledTableCell align="right">Color</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.priority}>
                <TableCell>{row.priority}</TableCell>
                <TableCell align="right">{row.desc}</TableCell>
                <TableCell align="right">
                  <TrendingUpIcon />
                </TableCell>
                <TableCell align="right">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="85%" cy="50%" r="12" fill="red" />
                  </svg>
                </TableCell>
                <TableCell align="right">
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    className={classes.fab}
                    size="small"
                  >
                    <EditIcon />
                  </Fab>
                </TableCell>
                <TableCell align="right">
                  <Fab
                    color="default"
                    aria-label="delete"
                    className={classes.fab}
                    size="small"
                  >
                    <DeleteIcon />
                  </Fab>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
