import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import AddModuleForm from "./AddModuleForm";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  input: {
    display: "none"
  }
}));

export default function ModuleCustomToolbar() {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  return (
    <React.Fragment>
      <Tooltip title={"Add"}>
        <IconButton className={classes.iconButton} onClick={handleAddOpen}>
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
      <Dialog
        open={openAdd}
        onClose={handleAddClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Add Module</DialogTitle>
        <Divider />
        <DialogContent>
          <AddModuleForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
