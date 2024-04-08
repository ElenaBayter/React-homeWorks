import React, { useState } from "react";

function ToDoList() {
  const [elements, setElements] = useState([]);
  const [newElem, setNewElem] = useState("");

  const handleInputChange = (e) => {
    setNewElem(e.target.value);
  };

  const handleAddElem = () => {
    if (newElem.trim() !== "") {
      setElements([...elements, newElem.trim()]);
      setNewElem("");
    }
  };

  const deleteEl = (indexToDelete) => {
    setElements(elements.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2>Ingredients list:</h2>
      <input
        type="text"
        value={newElem}
        onChange={handleInputChange}
        placeholder="Введите новый ингредиент"
      />
      <button onClick={handleAddElem}>Добавить</button>
      <ul>
        {elements.map((elem, index) => (
          <li key={index}>
            {elem}
            <button onClick={() => deleteEl(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
