import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { firestore } from "../firebase/config";
import { setDoc, doc, collection } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";

const AddTask = () => {
  const [task, setTask] = useState("");
  const user = useAuth();

  const newTask = async (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      return;
    }

    const taskRef = doc(collection(firestore, "Tasks"));
    await setDoc(taskRef, {
      task: task,
      user: user.email,
    });

    setTask("");
  };

  const isButtonDisabled = task.trim() === "";

  return (
    <div className="bg-gray-500/20 mx-3 mt-5 p-2 h-fit">
      <header className="text-white text-lg text-center">
        <h1>New Task</h1>
      </header>
      <form
        onSubmit={newTask}
        className="flex items-center mt-3 justify-center gap-2"
      >
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="outline-none text-xl rounded p-1 bg-gray-500/30"
          placeholder="Task name"
        />
        <button
          disabled={isButtonDisabled}
          className={`bg-yellow-500 rounded p-1 w-fit h-fit ${
            isButtonDisabled && "opacity-50 cursor-not-allowed"
          }`}
        >
          <MdAdd className="text-xl " />
        </button>
      </form>
    </div>
  );
};

export default AddTask;
