import React from "react";
import { TextField, Button } from "@material-ui/core";

const Add = () => {
  const [add, setAdd] = React.useState("");
  const [addList, setAddList] = React.useState("");
  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAddList(add);
          console.log(addList);
        }}
      >
        <TextField
          size="small"
          id="outlined-basic"
          label="Add details"
          variant="outlined"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
          style={{ width: "60%", marginRight: "3px" }}
        />
        <Button size="medium" variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default Add;
