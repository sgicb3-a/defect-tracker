import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import DoughtnutChart from "./DoughnutChart";
import ViewDefects from "./ViewDefects";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1)
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(3)
  }
}));

export default function QADashboard() {
  const classes = useStyles();
  const styleCard = { height: "11rem" };
  const styleHead = { height: "5rem" };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div className="card-header h5 text-secondary" style={styleHead}>
                New Defects
              </div>
              <div className="card-body text-primary">
                <h5 className="card-title h1">15</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div className="card-header h5 text-secondary" style={styleHead}>
                Opened Defects
              </div>
              <div className="card-body text-secondary">
                <h5 className="card-title h1">20</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div className="card-header h5 text-secondary" style={styleHead}>
                Reopened Defects
              </div>
              <div className="card-body text-info">
                <h5 className="card-title h1">3</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div className="card-header h5 text-secondary" style={styleHead}>
                High Priority Defects
              </div>
              <div className="card-body text-danger">
                <h5 className="card-title h1">8</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div className="card-header h5 text-secondary" style={styleHead}>
                High Severity
              </div>
              <div className="card-body text-warning">
                <h5 className="card-title h1">8</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div className="card-header h5 text-secondary" style={styleHead}>
                Fixed Defects
              </div>
              <div className="card-body text-success">
                <h5 className="card-title h1">35</h5>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <DoughtnutChart />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <LineChart />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <ViewDefects />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <BarChart />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <PieChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}