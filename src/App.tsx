import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Login } from "./Components/Login";
import { Dashboard } from "./Components/Dashboard";

function App() {
  return (
    <main id="main" className="w-screen min-h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

export default App;
