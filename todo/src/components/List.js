import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const List = () => {
  const [check, setCheck] = React.useState(false);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            // checked={state.checkedA}
            onChange={(e) => setCheck(true)}
            // name="checkedA"
          />
        }
        label={
          <p>
            {check ? (
              <del>can a list be here in label</del>
            ) : (
              <p> can a list be here in label</p>
            )}
          </p>
        }
      />
    </div>
  );
};

export default List;
