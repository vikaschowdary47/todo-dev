import React from "react";
import { TextField, Button } from "@material-ui/core";

const Add = ({ addList }) => {
  const [add, setAdd] = React.useState("");
  const [addList, setAddList] = React.useState("");
  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <form
        value={addList}
        onSubmit={(e) => {
          e.preventDefault();
          setAddList(add);
          setAdd("");
          console.log(addList);
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
    </div>
  );
};

export default Add;
