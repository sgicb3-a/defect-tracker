import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3)
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function ProductAdminstration() {
  const classes = useStyles();
  const styleCard = { maxWidth: "18rem" };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div className="card-header h5">Clients</div>
              <div className="card-body text-danger">
                <h5 className="card-title h1">20</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div className="card-header h5">Platinum</div>
              <div className="card-body text-success">
                <h5 className="card-title h1">3</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div className="card-header h5">Gold</div>
              <div className="card-body text-info">
                <h5 className="card-title h1">11</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div className="card-header h5">Silver</div>
              <div className="card-body text-warning">
                <h5 className="card-title h1">4</h5>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="card border-primary mb-3" style={styleCard}>
              <div className="card-header h5">Bronze</div>
              <div className="card-body text-secondary">
                <h5 className="card-title h1">2</h5>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <DoughnutChart />
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
