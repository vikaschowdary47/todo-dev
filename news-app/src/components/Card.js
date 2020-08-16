import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display: "flex",
    // flexWrap: "wrap",
  },
  paper: {
    height: 400,
    width: 200,
    // backgroundColor: "blue",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const News = ({ news, image }) => {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <div style={{ display: "flex" }}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default News;
