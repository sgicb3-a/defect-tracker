import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import ViewIcon from "@material-ui/icons/AspectRatio";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  fab: {
    margin: theme.spacing(1)
  }
}));

export default function EmployeeCustomToolbarSelect() {
  const classes = useStyles();
  return (
    <div>
      <Fab
        color="secondary"
        aria-label="edit"
        className={classes.fab}
        size="small"
      >
        <ViewIcon />
      </Fab>
      <Fab
        color="secondary"
        aria-label="edit"
        className={classes.fab}
        size="small"
      >
        <EditIcon />
      </Fab>
      <Fab
        color="default"
        aria-label="delete"
        className={classes.fab}
        size="small"
      >
        <DeleteIcon />
      </Fab>
    </div>
  );
}
