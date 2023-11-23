import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Task, TaskStatus } from '../models/Task';
import '../styles/task-page.scss';
import TasksList from '../components/TasksList';


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
      <TasksList tasks={tasks} id='list-in-task-page'/>
    </div>
  );
};

export default TaskPage;
