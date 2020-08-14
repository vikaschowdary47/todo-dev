import React, { useContext } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { ToDoListContext } from "../ToDoListContext";

const List = ({ item }) => {
  // const [check, setCheck] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [toDoList, setToDoList] = useContext(ToDoListContext);

  // const useEffect =
  //   ((item) => {
  //     setList(item);
  //   },
  //   [item]);
  // console.log(list);
  // console.log(item);
  // list.push(item);
  // console.log(list);
  // setList(item);

  // console.log(value);
  return (
    <div>
      {/* {list.map((li) => (
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
      ))} */}
      {/* <h1>{value}</h1>
       */}
      <ul>
        {toDoList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
