import React, { useState } from 'react';
import { Task, TaskStatus } from '../models/Task';
import '../styles/edit-page.scss';

const EditPage: React.FC = () => {
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [newTaskDescription, setNewTaskDescription] = useState<string>('');

  return (
    <div className="container">
      <div id="header">
        <h2>Task Management {'>'} Edit</h2>
      </div>
      <section className="edit-task-section">
        <h3>Edit Task</h3>

        <form onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />

          <button type="submit">Add</button>
        </form>
      </section>
    </div>
  );
};

export default EditPage;
