import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from './pages/Main/Main'
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
