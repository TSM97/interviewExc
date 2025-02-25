import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import { HomeContent } from "../Pages/HomeContent";
import { Storage1 } from "../Pages/Storage1";
import { Storage2 } from "../Pages/Storage2";
import { AuthContext } from "../../Context/AuthContext";

export default function Dashboard() {
  const context = useContext(AuthContext);
  if (!context) return;
  const { session } = context;

  if (!session) {
    return <Navigate to="/Login" />;
  }

  return (
    <section id="dashboard" className="flex">
      <Sidebar />
      <main className="flex flex-col w-full">
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="storage1" element={<Storage1 />} />
            <Route path="storage2" element={<Storage2 />} />
          </Routes>
        </Content>
      </main>
    </section>
  );
}
