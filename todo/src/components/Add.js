import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import List from "./List";
import { ToDoListContext } from "../ToDoListContext";

const Add = () => {
  const [add, setAdd] = React.useState("");
  const [doList, setDoList] = React.useState("");

  const [toDoList, setToDoList] = useContext(ToDoListContext);

  console.log(toDoList);
  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <form
        // value={addList}
        onSubmit={(e) => {
          e.preventDefault();
          setDoList(add);
          toDoList.push(add);
          setAdd("");
          console.log(doList);
        }}
      >
        <TextField
          size="small"
          id="outlined-basic"
          label="Add details"
          variant="outlined"
          value={add}
          onChange={(e) => {
            setAdd(e.target.value);
            // console.log(add);
          }}
          style={{ width: "60%", marginRight: "3px" }}
        />
        <Button size="medium" variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
      {/* <List item={doList} /> */}
    </div>
  );
};

export default Add;
