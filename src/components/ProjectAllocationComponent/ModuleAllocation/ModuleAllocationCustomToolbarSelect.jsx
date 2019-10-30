import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import RedoIcon from "@material-ui/icons/Redo";
import UndoIcon from "@material-ui/icons/Undo";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import AddModuleAllocationForm from "./AddModuleAllocationForm";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  }
}));

export default function ModuleAllocationCustomToolbarSelect() {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openDeallocate, setOpenDeallocate] = React.useState(false);

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  const handleDeallocateOpen = () => {
    setOpenDeallocate(true);
  };

  const handleDeallocateClose = () => {
    setOpenDeallocate(false);
  };

  return (
    <div>
      <Tooltip title={"Deallocate"}>
        <IconButton className={classes.iconButton}>
          <Fab
            color="default"
            aria-label="edit"
            className={classes.fab}
            size="small"
            onClick={handleDeallocateOpen}
          >
            <UndoIcon />
          </Fab>
        </IconButton>
      </Tooltip>

      <Dialog
        open={openDeallocate}
        onClose={handleDeallocateClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Deallocate Module</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to deallocate Module from the selected employee(s)?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeallocateClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDeallocateClose}
            color="primary"
          >
            Deallocate
          </Button>
        </DialogActions>
      </Dialog>

      <Tooltip title={"Allocate"}>
        <IconButton className={classes.iconButton}>
          <Fab
            color="secondary"
            aria-label="edit"
            className={classes.fab}
            size="small"
            onClick={handleAddOpen}
          >
            <RedoIcon />
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
        <DialogTitle id="add-project-title">Allocate Module</DialogTitle>
        <Divider />
        <DialogContent>
          <AddModuleAllocationForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddClose} color="primary">
            Allocate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
