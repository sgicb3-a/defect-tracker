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

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

function createData(type, desc, edit, del) {
  return { type, desc, edit, del };
}

const rows = [createData("UI", "User Interface")];

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
  table: {
    minWidth: 700
  },
  fabStyle: {
    marginTop: theme.spacing(3)
  }
}));

export default function DefectType() {
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
        <DialogTitle id="add-project-title">Add Defect Type</DialogTitle>
        <Divider />
        <DialogContent>
          <form className={classes.container} autoComplete="off">
            <Grid container justify="space-between">
              <TextField
                required
                id="project-name"
                label="Defect Type"
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
              <StyledTableCell>Defect Type</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.type}>
                <TableCell>{row.type}</TableCell>
                <TableCell align="right">{row.desc}</TableCell>
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
