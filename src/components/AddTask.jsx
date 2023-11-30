import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { firestore } from "../firebase/config";
import { setDoc, doc, collection } from "firebase/firestore";

const AddTask = () => {
  const [task, setTask] = useState("");

  const newTask = async (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      // Don't add a task if the input is empty
      return;
    }

    const taskRef = doc(collection(firestore, "tasks"));
    await setDoc(taskRef, {
      name: task,
      created_at: new Date(),
      completed: false,
    });

    setTask("");
  };

  const isButtonDisabled = task.trim() === "";

  return (
    <div className="text-white w-3/6 mx-auto mt-12 bg-gray-500/10 flex justify-between">
      <header className="p-2 mt-1 text-2xl font-bold">
        <h1>New Task</h1>
      </header>
      <form onSubmit={newTask} className="flex gap-2 p-3">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="outline-none text-xl rounded p-2 bg-gray-500/30 w-96"
          placeholder="Task name"
        />
        <button
          disabled={isButtonDisabled}
          className={`flex text-xl items-center px-2 mx-3 bg-gradient-to-b from-green-500 rounded ${
            isButtonDisabled && "opacity-50 cursor-not-allowed"
          }`}
        >
          <MdAdd className="text-3xl" />
          <h2>Add</h2>
        </button>
      </form>
    </div>
  );
};

export default AddTask;
