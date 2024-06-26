import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/reducers/themeSlice";
import axios from "axios";
import "./index.scss";
import TodoTab from "../../components/todoTab/TodoTab";

export default function TodoPage() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [todoData, setTodoData] = useState([]);

  // Change Light/Dark theme
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  // Show all data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/todos");

      setTodoData(result.data.results);
    } catch (error) {
      console.log("Something wrong: ", error);
    }
  };

  // Add new data
  const handleTaskSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/addnew", {
        description: task,
      });

      setTask("");
      fetchData();
    } catch (error) {
      console.error("Some error: ", error);
    }
  };

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleTaskSubmit(event);
    }
  };

  // Delete checked tasks
  const handleDelete = async () => {
    await axios.delete("http://127.0.0.1:8000/api/todosdelete");
    fetchData();
  };

  // Count remaining tasks
  const remainingTasks = todoData.filter((todo) => todo.completed === 0).length;

  return (
    <div className={`main ${isDarkTheme ? "main_dark" : "main_light"}`}>
      <div
        className={`main__background ${
          isDarkTheme ? "main__background_dark" : "main__background_light"
        }`}
      />

      <div className="main__block">
        <div className="main__section main__section_first">
          <h1 className="main__section-title">todo</h1>

          <button
            className={`main__theme-btn ${
              isDarkTheme ? "main__theme-btn_dark" : "main__theme-btn_light"
            }`}
            onClick={handleThemeToggle}
          />
        </div>

        <div
          className={`input-block ${
            isDarkTheme ? "input-block_dark" : "input-block_light"
          }`}
        >
          <div
            className={`input-block__circle ${
              isDarkTheme
                ? "input-block__circle_dark"
                : "input-block__circle_light"
            }`}
          />

          <input
            type="text"
            name="task"
            id="task"
            className={`input-block__textfield ${
              isDarkTheme
                ? "input-block__textfield_dark"
                : "input-block__textfield_light"
            }`}
            value={task}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            placeholder="Create a new todo..."
          />
        </div>

        <div className="tabs-block">
          {todoData.map((todo) => {
            return (
              <TodoTab
                key={todo.id}
                id={todo.id}
                description={todo.description}
                completed={todo.completed}
                updateData={fetchData}
              />
            );
          })}

          <div
            className={`total-lists ${
              isDarkTheme ? "total-lists_dark" : "total-lists_light"
            }`}
          >
            <p
              className={`total-lists__count ${
                isDarkTheme
                  ? "total-lists__count_dark"
                  : "total-lists__count-light"
              }`}
            >
              <span className="count">{remainingTasks}</span> items left
            </p>

            <button
              className={`total-lists__btn ${
                isDarkTheme ? "total-lists__btn_dark" : "total-lists__btn_light"
              }`}
              onClick={handleDelete}
            >
              Clear Completed
            </button>
          </div>
        </div>

        {/* <p
          className={`main__subtitle ${
            isDarkTheme ? "main__subtitle_dark" : "main__subtitle_light"
          }`}
        >
          Drag and drop to reorder list
        </p> */}
      </div>
    </div>
  );
}
