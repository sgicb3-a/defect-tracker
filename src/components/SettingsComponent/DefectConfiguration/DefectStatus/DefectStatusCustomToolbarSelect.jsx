import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  }
}));

export default function DefectStatusCustomToolbarSelect() {
  const classes = useStyles();
  return (
    <div>
      <Tooltip title={"Edit"}>
        <IconButton className={classes.iconButton}>
          <Fab
            color="secondary"
            aria-label="edit"
            className={classes.fab}
            size="small"
          >
            <EditIcon />
          </Fab>
        </IconButton>
      </Tooltip>

      <Tooltip title={"Delete"}>
        <IconButton className={classes.iconButton}>
          <Fab
            color="default"
            aria-label="delete"
            className={classes.fab}
            size="small"
          >
            <DeleteIcon />
          </Fab>
        </IconButton>
      </Tooltip>
    </div>
  );
}
