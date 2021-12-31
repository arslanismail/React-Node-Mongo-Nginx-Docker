import * as React from "react";
// Import interfaces
import { TodoItemInterface } from "../interface";
// TodoItem component
const ToDoItem = (props: TodoItemInterface) => {
  return (
    <div className="todo-item">
      <div onClick={() => props.handleTodoComplete(props.todo._id)}>
        {props.todo.isCompleted ? (
          <span className="todo-item-checked">✔</span>
        ) : (
          <span className="todo-item-unchecked" />
        )}
      </div>
      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleTodoUpdate(event, props.todo._id)
          }
        />
      </div>
      <div
        className="item-remove"
        onClick={() => props.handleTodoRemove(props.todo._id)}
      >
        ⨯
      </div>
    </div>
  );
};
export default ToDoItem;
