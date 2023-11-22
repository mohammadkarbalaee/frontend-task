import React from 'react';
import TaskPage from './screens/TaskPage';
import { Route, Routes } from 'react-router';
import EditPage from './screens/EditPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<TaskPage/>} />
      <Route path='/edit' element={<EditPage/>} />
    </Routes>
  );
}

export default App;
