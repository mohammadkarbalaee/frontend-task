import React, { useState } from 'react';
import { Task, TaskStatus } from '../models/Task';
import './styles/TaskPage.scss';
import { Link } from 'react-router-dom';


const TaskPage: React.FC = () => {
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [newTaskDescription, setNewTaskDescription] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleNewTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newTaskTitle || !newTaskDescription) {
      return;
    }

    const newTask: Task = {
      id: tasks.length + 1,
      title: newTaskTitle,
      description: newTaskDescription,
      status: TaskStatus.Todo,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };


  return (
    <div className="container">
      <div id="header">
        <h2>Task Management {'>'} Home</h2>
      </div>
      <section className="new-task-section">
        <h3>Add a New Task</h3>

        <form onSubmit={handleNewTaskSubmit}>
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

      <section className="tasks-section">
        <h3 id="tasks-title">Tasks</h3>

        {tasks.length === 0 ? (
          <div className="empty-tasks">You have nothing to do. Get some sleep</div>
        ) : (
          <div className="task-columns">
            {tasks.map((task) => (
              <div key={task.id} className="task">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <div className="actions">
                  <p>{task.status}</p>
                  <Link className='button' to={"/edit"}>{"edit"}</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default TaskPage;
