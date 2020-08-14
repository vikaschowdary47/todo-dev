import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Main = ({ name }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      {/* <Paper square className={classes.root}> */}
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        //   centered
      >
        <Tab label="All"></Tab>
        <Tab label="Active" />
        <Tab label="Completed" />
      </Tabs>
      {/* </Paper> */}
    </div>
  );
};

export default Main;
