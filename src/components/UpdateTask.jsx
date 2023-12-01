import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { doc, updateDoc, getDoc } from "firebase/firestore";

const UpdateTask = ({ id, setModal }) => {
  const [task, setTask] = useState();

  useEffect(() => {
    const fetchTask = async () => {
      const taskDoc = await getDoc(doc(firestore, "tasks", id));

      if (taskDoc.exists()) {
        setTask(taskDoc.data().name);
      } else {
        console.log("Doc Not Found");
      }
    };
    fetchTask();
  }, [id]);

  const updateTask = async (e) => {
    e.preventDefault();

    const taskRef = doc(firestore, "tasks", id);

    try {
      await updateDoc(taskRef, {
        name: task,
      });
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header>
        <h1 className="text-start p-2 font-bold">
          Now editing taks with id: {id}
        </h1>
      </header>
      <form onSubmit={updateTask} className="flex gap-2 p-3">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="outline-none text-xl rounded p-2 bg-gray-500/30 w-96"
          placeholder="Task name"
        />
        <button className="bg-yellow-500 p-2 rounded">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTask;
