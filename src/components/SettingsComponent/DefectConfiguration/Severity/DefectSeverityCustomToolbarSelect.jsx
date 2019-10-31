import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import EditSeverityForm from "./editSeverityForm";

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

export default function DefectSeverityCustomToolbarSelect() {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  return (
    <div>
      <Tooltip title={"Edit"}>
        <IconButton className={classes.iconButton} onClick={handleEditOpen}>
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

      <Dialog
        open={openEdit}
        onClose={handleEditClose}
        aria-labelledby="edit-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="edit-project-title">Edit Severity</DialogTitle>
        <Divider />
        <DialogContent>
          <EditSeverityForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleEditClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      <Tooltip title={"Delete"}>
        <IconButton className={classes.iconButton} onClick={handleDeleteOpen}>
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

      <Dialog
        open={openDelete}
        onClose={handleDeleteClose}
        aria-labelledby="delete-project-title"
        fullWidth={true}
        maxWidth={"xs"}
      >
        <DialogTitle id="delete-project-title">Delete Severity</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are about to delete an item, are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDeleteClose}
            color="primary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}