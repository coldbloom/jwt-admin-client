import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Main from './pages/Main/Main'
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/header/Header";
import {useSelector} from "react-redux";
import {IRootState} from "./store";

function App() {
    const isLoggedIn = useSelector(
        (state: IRootState) => !!state.auth.authData.accessToken
    );

    return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route
                path="/dashboard"
                element={isLoggedIn ? <Dashboard /> : <Navigate to = '/'/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
