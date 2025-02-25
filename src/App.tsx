import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Login } from "./Components/Login";
import { Dashboard } from "./Components/Dashboard";
import { AuthContext } from "./Context/AuthContext";
import { sessionType } from "./Types/isAuthenticatedType";

function App() {
  const [session, setSession] = useState<sessionType | undefined>();

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      <main id="main" className="min-w-screen min-h-screen">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </main>
    </AuthContext.Provider>
  );
}

export default App;
