import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

export default function Dashboard() {
  return (
    <section id="dashboard" className="flex">
      <Sidebar />
      <main className="flex flex-col w-full">
        <Header />
      </main>
    </section>
  );
}
