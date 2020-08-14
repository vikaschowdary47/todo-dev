import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const List = ({ item }) => {
  // const [check, setCheck] = React.useState(false);
  const [list, setList] = React.useState([]);

  // const useEffect =
  //   ((item) => {
  //     setList(item);
  //   },
  //   [item]);
  // console.log(list);
  console.log(item);
  list.push(item);
  // console.log(list);
  // setList(item);

  return (
    <div>
      {list.map((li) => (
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedA}
              // onChange={(e) => setCheck(true)}
              // name="checkedA"
              key={li}
            />
          }
          label={<p key={li}>{li}</p>}
        />
      ))}
    </div>
  );
};

export default List;
