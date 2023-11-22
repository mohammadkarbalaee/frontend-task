// TaskEditPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Task } from '../models/Task';

interface TaskEditPageProps {
  tasks: Task[];
  onTaskStatusChange: (taskId: number, newStatus: 'todo' | 'inProgress' | 'done') => void;
}

const TaskEditPage: React.FC<TaskEditPageProps> = ({ tasks, onTaskStatusChange }) => {
  const { taskId } = useParams<{ taskId?: string }>();
  
  if (!taskId) {
    return <div>Task ID is missing</div>;
  }

  const parsedTaskId = parseInt(taskId, 10);
  const task = tasks.find((t) => t.id === parsedTaskId);

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleStatusChange = (newStatus: 'todo' | 'inProgress' | 'done') => {
    onTaskStatusChange(parsedTaskId, newStatus);
  };

  return (
    <div className="container">
      <div id='header'>
        <h2>Edit Task</h2>
      </div>
      <div className="task">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <div className='actions'>
          <button onClick={() => handleStatusChange('todo')}>To Do</button>
          <button onClick={() => handleStatusChange('inProgress')}>In Progress</button>
          <button onClick={() => handleStatusChange('done')}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default TaskEditPage;
