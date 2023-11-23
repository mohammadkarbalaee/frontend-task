import React, { useState, useEffect } from 'react';
import TaskPage from './screens/TaskPage';
import { Route, Routes } from 'react-router';
import EditPage from './screens/EditPage';
import { Task } from './models/Task';

// Define a type for the tasks array
type TasksType = Task[];

function App() {
  const storedTasks = localStorage.getItem('tasks');
  const initialTasks: TasksType = storedTasks ? JSON.parse(storedTasks) : [];
  const [tasks, setTasks] = useState<TasksType>(initialTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Routes>
      <Route path='/' element={<TaskPage tasks={tasks} setTasks={setTasks} />} />
      <Route path='/edit/:taskId' element={<EditPage tasks={tasks} setTasks={setTasks} />} />
    </Routes>
  );
}

export default App;
