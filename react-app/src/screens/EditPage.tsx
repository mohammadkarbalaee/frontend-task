import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Task, TaskStatus } from '../models/Task';
import '../styles/edit-page.scss';

interface EditPageProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const EditPage: React.FC<EditPageProps> = ({ tasks, setTasks }) => {
  const { taskId } = useParams<{ taskId: string }>(); 
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [newTaskDescription, setNewTaskDescription] = useState<string>('');

  console.log(taskId);


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
