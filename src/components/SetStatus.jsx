import React, { useState } from "react";
import { firestore } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const SetStatus = ({ id }) => {
  const [complete, setComplete] = useState(true);
  console.log(complete);
  const updateStatus = async (e) => {
    e.preventDefault();

    const taskRef = doc(firestore, "Tasks", id);

    try {
      await updateDoc(taskRef, {
        completed: complete,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white h-screen w-screen top-0 absolute right-0 bg-gray-700/10 text-4xl text-center">
      <h2>Set Status Bitch!!</h2>
      <h2>{id}</h2>
      <form onSubmit={updateStatus}>
        <label>
          <input
            type="radio"
            value={true}
            checked={complete === true}
            onChange={() => setComplete(true)}
          />
          Mark Completed
        </label>
        <label>
          <input
            type="radio"
            value={false}
            checked={complete === false}
            onChange={() => setComplete(false)}
          />
          Mark Incomplete
        </label>
        <button className="bg-yellow-500 p-2 rounded ">Update</button>
      </form>
    </div>
  );
};

export default SetStatus;
