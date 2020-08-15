import React, { useContext } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { ToDoListContext } from "../ToDoListContext";

const List = ({ item }) => {
  const [checked, setChecked] = React.useState(false);
  // const [list, setList] = React.useState([]);
  const [toDoList, setToDoList] = useContext(ToDoListContext);

  return (
    <div>
      <ul>
        {toDoList.map((item) => (
          <li key={item.id} style={{ listStyle: "none", textAlign: "start" }}>
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
              {/* // {check ? <del>{`${item}`}</del> : `${item}`} */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
