import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ViewIcon from "@material-ui/icons/AspectRatio";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

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

export default function LogCustomToolbarSelect() {
  const classes = useStyles();
  return (
    <div>
      <Tooltip title={"View"}>
        <IconButton className={classes.iconButton}>
          <Fab
            color="secondary"
            aria-label="view"
            className={classes.fab}
            size="small"
          >
            <ViewIcon />
          </Fab>
        </IconButton>
      </Tooltip>
    </div>
  );
}
