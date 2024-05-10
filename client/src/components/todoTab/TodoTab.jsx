import { useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./index.scss";

TodoTab.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string,
  completed: PropTypes.number,
};

export default function TodoTab({ id, description, completed }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const [isChecked, setIsChecked] = useState(completed === 1);

  const handleCheckboxChecked = async () => {
    setIsChecked(!isChecked);

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/todosupdate/${id}`
      );
      console.log("Task checked: ", response.data);
    } catch (error) {
      console.log("Some error: ", error);
    }
  };

  return (
    <div
      className={`todo-tab ${isDarkTheme ? "todo-tab_dark" : "todo-tab_light"}`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChecked}
        className={`todo-tab__check-btn ${
          isDarkTheme ? "todo-tab__check-btn_dark" : "todo-tab__check-btn_light"
        }
        `}
      />

      <p
        className={`todo-tab__text ${
          isDarkTheme ? "todo-tab__text_dark" : "todo-tab__text_light"
        } ${isChecked ? "todo-tab__text_checked" : ""}`}
      >
        {description}
      </p>
    </div>
  );
}
