import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import RollTransferList from "./RollTransferList";
import ModuleTransferList from "./ModuleTransferList";
import TablePagination from "@material-ui/core/TablePagination";
import RollDeallocate from "./RollDeallocate";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

function createData(project, se, ase, tl, qatl, sqa, aqa) {
  return { project, se, ase, tl, qatl, sqa, aqa };
}

const rows = [createData("CMS", 12, 8, 2, 1, 3, 2)];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(5),
    overflowX: "auto"
  },
  textField: {
    marginRight: theme.spacing(3),
    width: "250px"
  },
  button: {
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(1),
    width: "250px"
  },
  table: {
    minWidth: 700
  }
}));

export default function ProjectAllocation() {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openDeAllocate, setOpenDeAllocate] = React.useState(false);
  const [openModule, setOpenModule] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAddOpen = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  const handleDeAllocateOpen = () => {
    setOpenDeAllocate(true);
  };

  const handleDeAllocateClose = () => {
    setOpenDeAllocate(false);
  };

  const handleModuleOpen = () => {
    setOpenModule(true);
  };

  const handleModuleClose = () => {
    setOpenModule(false);
  };

  return (
    <div>
      <div>
        <Grid container justify="flex-start">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleAddOpen}
          >
            Roll Allocation
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={handleDeAllocateOpen}
          >
            Roll Deallocation
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleModuleOpen}
          >
            Module Allocation
          </Button>
        </Grid>
      </div>
      <Dialog
        open={openAdd}
        onClose={handleAddClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Allocate Role</DialogTitle>
        <Divider />
        <DialogContent>
          <RollTransferList />
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

      <Dialog
        open={openDeAllocate}
        onClose={handleDeAllocateClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Deallocate Role</DialogTitle>
        <Divider />
        <DialogContent>
          <RollDeallocate />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeAllocateClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDeAllocateClose}
            color="primary"
          >
            Deallocate
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openModule}
        onClose={handleModuleClose}
        aria-labelledby="add-project-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="add-project-title">Allocate Module</DialogTitle>
        <Divider />
        <DialogContent>
          <ModuleTransferList />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModuleClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleModuleClose}
            color="primary"
          >
            Allocate
          </Button>
        </DialogActions>
      </Dialog>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Project</StyledTableCell>
              <StyledTableCell align="right">Software Engineer</StyledTableCell>
              <StyledTableCell align="right">Associate SE</StyledTableCell>
              <StyledTableCell align="right">Tech Lead</StyledTableCell>
              <StyledTableCell align="right">Associate TL</StyledTableCell>
              <StyledTableCell align="right">Senior QA</StyledTableCell>
              <StyledTableCell align="right">Associate QA</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.project}>
                  <TableCell>{row.project}</TableCell>
                  <TableCell align="right">{row.se}</TableCell>
                  <TableCell align="right">{row.ase}</TableCell>
                  <TableCell align="right">{row.tl}</TableCell>
                  <TableCell align="right">{row.qatl}</TableCell>
                  <TableCell align="right">{row.sqa}</TableCell>
                  <TableCell align="right">{row.aqa}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <div>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "previous page"
            }}
            nextIconButtonProps={{
              "aria-label": "next page"
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      </Paper>
    </div>
  );
}
