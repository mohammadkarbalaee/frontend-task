import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'inProgress' | 'done';
}

const TaskManagementHomePage: React.FC = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
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
      status: 'todo',
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const handleTaskStatusChange = (taskId: number, newStatus: 'todo' | 'inProgress' | 'done') => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    }));
  };

  return (
    <div className="container">
      <div id='header'><h2>Task Management {'>'} Home</h2></div>
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
        <h3 id='tasks-title'>Tasks</h3>

        <div className="task-columns">
          {tasks.map((task) => (
            <div key={task.id} className={`task-column ${task.status}`}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>

              <button
                onClick={() => handleTaskStatusChange(task.id, 'done')}
                disabled={task.status === 'done'}
              >
                Mark as Done
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TaskManagementHomePage;
