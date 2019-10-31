import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  }
}));

export default function DefectCustomToolbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Tooltip title={"Add"}>
        <IconButton
          className={classes.iconButton}
          component={Link}
          to={"/defect-tracker/manage-defect/add-defect"}
        >
          <Fab
            color="primary"
            aria-label="add"
            className={classes.fab}
            size="small"
          >
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
}
