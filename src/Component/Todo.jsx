import { useState } from "react";

function Todo() {
  const [todolist, setTodolist] = useState([]);
  const [type, setType] = useState("");

  {
    /**ADD TODO FUNCTION  */
  }
  function addTodo() {
    if (type.trim() === "") return;
    setTodolist([...todolist, type]);
    setType("");
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
            <ul>
              <li>{list}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
