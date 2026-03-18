import { useState } from "react";

function Todo() {
  const [todolist, setTodolist] = useState([]);
  const [type, setType] = useState("");
  const [color, setChangecolor] = useState("#333");
  {
    /**ADD TODO FUNCTION  */
  }
  function addTodo() {
    if (type.trim() === "") return;
    setTodolist([...todolist, type]);
    setType("");
  }

  function completed() {
    setChangecolor("#910808");
  }
  return (
    <>
      <div className="todo-container">
        <h1>Todolist</h1>
        <div className="input-box">
          <input
            value={type}
            type="text"
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter todo here..."
          />
          <button onClick={addTodo} className="add-btn">
            Add todo
          </button>
        </div>

        {/** THE TODOLIST CONTAINER **/}
        {todolist.map((list) => {
          return (
            <ul
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <li
                className="lis"
                value={color}
                style={{
                  listStyle: "none",
                  background: "#110fa149",
                  padding: "8px 5px",
                  borderRadius: "6px",
                  width: "370px",
                  wordWrap: "wrap",
                }}
              >
                {list}
              </li>
              <button onClick={completed}>completed</button>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
