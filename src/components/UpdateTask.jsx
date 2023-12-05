import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { doc, updateDoc, getDoc } from "firebase/firestore";

const UpdateTask = ({ id, setModal }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      const taskDoc = await getDoc(doc(firestore, "Tasks", id));

      if (taskDoc.exists()) {
        setTask(taskDoc.data().task);
      } else {
        console.log("Doc Not Found");
      }
    };
    fetchTask();
  }, [id]);

  const updateTask = async (e) => {
    e.preventDefault();

    const taskRef = doc(firestore, "Tasks", id);

    try {
      await updateDoc(taskRef, {
        task: task,
      });
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header>
        <h1 className="">
          Now editing task with id: {id}
        </h1>
      </header>
      <form onSubmit={updateTask} className="">
        <input
          value={task || ''} // Ensure it is never undefined
          onChange={(e) => setTask(e.target.value)}
          className=""
          placeholder="Task name"
        />
        <button className="">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTask;
