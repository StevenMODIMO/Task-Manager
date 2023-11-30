import Navbar from "./components/Navbar";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";

export default function App() {
  return (
    <main className="h-screen w-screen bg-black opacity-90">
      <Navbar />
      <AddTask />
      <Task />
    </main>
  );
}
