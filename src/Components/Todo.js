import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ props, deleteTask, markDone }) => {
  return (
    <div className="Todo">
      {props.isCompleted ? <del>{props.task}</del> : <p>{props.task}</p>}

      <div>
        {!props.isCompleted ? (
          <>
            <FontAwesomeIcon
              icon={faTrashAlt}
              style={{ marginRight: "10px" }}
              onClick={() => {
                deleteTask(props.id);
              }}
            />
            <FontAwesomeIcon
              icon={faCheck}
              onClick={() => {
                markDone(props.id);
              }}
            />
          </>
        ) : (
          <p>completed</p>
        )}
      </div>
    </div>
  );
};
