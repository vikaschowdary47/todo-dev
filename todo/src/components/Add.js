import React from "react";
import { TextField, Button } from "@material-ui/core";

const Add = () => {
  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <form>
        <TextField
          size="small"
          id="outlined-basic"
          label="Add details"
          variant="outlined"
          style={{ width: "60%", marginRight: "3px" }}
        />
        <Button size="medium" variant="contained" color="primary">
          Add
        </Button>
      </form>
    </div>
  );
};

export default Add;
