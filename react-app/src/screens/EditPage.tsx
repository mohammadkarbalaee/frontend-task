import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  const [taskStatus, setTaskStatus] = useState<TaskStatus>(TaskStatus.Todo);

  useEffect(() => {
    const taskToEdit = tasks.find(task => task.id === parseInt(taskId!, 10));

    if (taskToEdit) {
      setNewTaskTitle(taskToEdit.title);
      setNewTaskDescription(taskToEdit.description);
      setTaskStatus(taskToEdit.status);
    }
  }, [taskId, tasks]);

  const handleEdit = () => {
    const taskToEdit = tasks.find(task => task.id === parseInt(taskId!, 10));

    if (taskToEdit) {
      const updatedTask: Task = {
        ...taskToEdit,
        title: newTaskTitle,
        description: newTaskDescription,
        status: taskStatus,
      };

      setTasks(prevTasks =>
        prevTasks.map(task => (task.id === parseInt(taskId!, 10) ? updatedTask : task))
      );
    }
  };

  return (
    <div className="container">
      <div id="header">
        <h2>Task Management {'>'} Edit</h2>
      </div>
      <section className="edit-task-section">
        <h3>Edit Task</h3>

        <form>
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

          <select
            id="taskStatus"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value as TaskStatus)}
          >
            <option value={TaskStatus.Todo}>To Do</option>
            <option value={TaskStatus.InProgress}>In Progress</option>
            <option value={TaskStatus.Done}>Done</option>
          </select>
        </form>

        <div className="button-row">
          <button onClick={handleEdit}>Edit</button>
          <Link className='cancel' to="/">Cancel</Link>
        </div>
      </section>
    </div>
  );
};

export default EditPage;
