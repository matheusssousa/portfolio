import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";

export default function Router() {
    
    return (
        <Routes>
            <Route path='*' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/about' element={<About />} />
        </Routes>
    )
}