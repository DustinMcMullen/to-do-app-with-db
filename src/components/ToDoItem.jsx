import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div>
      <li
        onMouseDown={() => {
          props.delete(props.id);
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;