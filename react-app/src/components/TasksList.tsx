// TasksSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../models/Task';
import editIcon from "../assets/edit_black.svg";

interface TasksListProps {
  tasks: Task[];
  id: string;
}

const TasksList: React.FC<TasksListProps> = ({ tasks, id }) => {
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
              <Link className="button" to={`/edit/${task.id}`}>
                <img src={editIcon} alt='Edit'/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="tasks-section" id={id}>
      <h3 id="tasks-title">Tasks</h3>
      {renderTasks()}
    </section>
  );
};

export default TasksList;
