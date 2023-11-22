import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Task, TaskStatus } from '../models/Task';
import '../styles/task-page.scss';
import { Link } from 'react-router-dom';

interface TaskPageProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskPage: React.FC<TaskPageProps> = ({ tasks, setTasks }) => {
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [newTaskDescription, setNewTaskDescription] = useState<string>('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTaskDescription(e.target.value);
  };

  const handleNewTaskSubmit = (e: FormEvent<HTMLFormElement>) => {
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

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const renderTasks = () => {
    if (tasks.length === 0) {
      return <div className="empty-tasks">You have nothing to do. Get some sleep</div>;
    }

    return (
      <div className="task-columns">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <div className="actions">
              <p>{task.status}</p>
              <Link className="button" to="/edit">
                {"edit"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
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
            onChange={handleTitleChange}
          />

          <textarea
            placeholder="Description"
            value={newTaskDescription}
            onChange={handleDescriptionChange}
          />

          <button type="submit">Add</button>
        </form>
      </section>

      <section className="tasks-section">
        <h3 id="tasks-title">Tasks</h3>
        {renderTasks()}
      </section>
    </div>
  );
};

export default TaskPage;
