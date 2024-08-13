import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkList from './components/WorkList';
import AddWork from './components/AddWork';
import EditWork from './components/EditWork';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkList />} />
        <Route path="/add" element={<AddWork />} />
        <Route path="/edit/:id" element={<EditWork />} />
      </Routes>
    </Router>
  );
}

export default App;
