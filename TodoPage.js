import React, { useState, useEffect } from 'react';
import { signOut, auth } from './firebase';

function TodoPage({ user, setUser }) {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      title,
      description: desc,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDesc('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="app-container">
      <div className="header">
        <h2>Hello, {user.displayName}</h2>
        <button className="logout-btn" onClick={handleLogout}>Sign Out</button>
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description (optional)"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="no-task">No tasks yet</p>
        ) : (
          tasks.map(task => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-text" onClick={() => toggleComplete(task.id)}>
                <h3>{task.title}</h3>
                {task.description && <p>{task.description}</p>}
              </div>
              <button className="delete-btn" onClick={() => handleDelete(task.id)}>✖</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoPage;
