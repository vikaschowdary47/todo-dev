import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const List = () => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
          // checked={state.checkedA}
          // onChange={handleChange}
          // name="checkedA"
          />
        }
        label="can this be a list item"
      />
    </div>
  );
};

export default List;
