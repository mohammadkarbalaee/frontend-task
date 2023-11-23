import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Task, TaskStatus } from '../models/Task';
import '../styles/edit-page.scss';
import TasksList from '../components/TasksList';

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

  const getStatusOptions = () => {
    switch (taskStatus) {
      case TaskStatus.Todo:
        return [TaskStatus.Todo, TaskStatus.InProgress];
      case TaskStatus.Blocked:
        return [TaskStatus.Todo, TaskStatus.Blocked];
      case TaskStatus.InProgress:
        return [TaskStatus.InProgress, TaskStatus.InQA];
      case TaskStatus.InQA:
        return [TaskStatus.InQA, TaskStatus.Done, TaskStatus.Todo];
      case TaskStatus.Done:
        return [TaskStatus.Done, TaskStatus.Deployed];
      case TaskStatus.Deployed:
        return [TaskStatus.Deployed];
      default:
        return [];
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
            {getStatusOptions().map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </form>

        <div className="button-row">
          <Link className='edit' to="/" onClick={handleEdit}>
            Edit
          </Link>
          <Link className='cancel' to="/">
            Cancel
          </Link>
        </div>
      </section>
      <TasksList tasks={tasks} id='list-in-edit-page'/>
    </div>
  );
};

export default EditPage;
