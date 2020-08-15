import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import Add from "./Add";
import Completed from "./Completed";
// import List from "./List";

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

const Main = () => {
  // const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);
  // const [addList, setAddList] = React.useState("");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  // const addToList = () => {
  //   setAddList()
  // }

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Tabs
        value={selectedTab}
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
      {selectedTab === 0 && <Add />}
      {selectedTab === 1 && <Add />}
      {selectedTab === 2 && <Completed />}
    </div>
  );
};

export default Main;
