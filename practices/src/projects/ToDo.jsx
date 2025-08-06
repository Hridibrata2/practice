import React, { useState } from 'react';
import './ToDo.css';

const ToDo = () => {
  const [input, setInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newTask = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setTaskList(prev => [...prev, newTask]);
    setInput('');
  };

  const toggleCompleted = (id) => {
    setTaskList(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    setTaskList(prev => prev.filter(task => task.id !== id));
  };

  return (
    <section className="todo-container">
      <header>
        <h2 className="todo-header">Things to Do</h2>
      </header>

      <div className="todo-input-section">
        <input
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAdd();
            }
          }}
          placeholder="What's next?"
        />
        <button className="btn-add" onClick={handleAdd}>Add</button>
      </div>

      <ul className="todo-list">
        {taskList.map(({ id, text, completed }) => (
          <li
            key={id}
            className="todo-item"
            onClick={() => toggleCompleted(id)}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            <span>{text}</span>
            <button
              className="btn-delete"
              onClick={(e) => handleDelete(id, e)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToDo;
