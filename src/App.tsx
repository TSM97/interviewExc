import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Login } from "./Components/Login";
import { Dashboard } from "./Components/Dashboard";

function App() {
  return (
    <main id="main" className="min-w-screen min-h-screen">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

export default App;
