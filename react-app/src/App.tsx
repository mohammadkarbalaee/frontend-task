import React, { useState } from 'react';
import TaskPage from './screens/TaskPage';
import { Route, Routes } from 'react-router';
import EditPage from './screens/EditPage';
import { Task } from './models/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <Routes>
      <Route path='/' element={<TaskPage tasks={tasks} setTasks={setTasks} />} />
      <Route path='/edit/:taskId' element={<EditPage tasks={tasks} setTasks={setTasks} />} />
    </Routes>
  );
}

export default App;
