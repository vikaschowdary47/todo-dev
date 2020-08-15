import React, { useContext } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { ToDoListContext } from "../ToDoListContext";

const List = ({ item }) => {
  const [checked, setChecked] = React.useState(false);
  // const [list, setList] = React.useState([]);
  const [toDoList, setToDoList] = useContext(ToDoListContext);

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
      {/* <ul> */}
      {toDoList.map((item) => (
        // <li key={item} style={{ listStyle: "none", textAlign: "start" }}>
        <div key={item.id}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => setChecked(e.target.checked)}
                key={item.id}
              />
            }
            label={
              checked ? (
                <del key={item.id}>{`${item.task}`}</del>
              ) : (
                `${item.task}`
              )
            }
            key={item.id}
          />
          // {/* {check ? <del>{`${item}`}</del> : `${item}`} */}
          // {/* </li> */}
          <input
            type="checkbox"
            key={item.task}
            onChange={() => setChecked(!checked)}
          >
            {/* {item.task} */}
          </input>
        </div>
      ))}
      {/* </ul> */}
    </div>
  );
};

export default List;
