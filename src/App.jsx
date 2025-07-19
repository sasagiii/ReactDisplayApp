import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./contexts/AppProvider";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";
import React from "react";

function App() {
  return (
    <AppProvider>
      <Router basename="/ReactDisplayApp/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Experience" element={<ExperiencePage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
