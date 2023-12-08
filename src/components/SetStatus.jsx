import React, { useState } from "react";
import { firestore } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const SetStatus = ({ id }) => {
  const [coomplete, setComplete] = useState();
  const updateStatus = async (e) => {
    e.preventDefault();

    const taskRef = doc(firestore, "Tasks", id);

    try {
      await updateDoc(taskRef, {
        completed: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-white h-screen w-screen top-0 absolute right-0 bg-black">
      <h2>Set Status Bitch!!</h2>
      <form>
        <input type="radio" />
      </form>
    </div>
  );
};

export default SetStatus;
