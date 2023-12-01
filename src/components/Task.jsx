import React, { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { AnimatePresence, motion } from "framer-motion";
import {
  getDocs,
  onSnapshot,
  collection,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { MdDelete, MdEdit } from "react-icons/md";
import UpdateTask from "./UpdateTask";
import Modal from "./Modal";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await getDocs(collection(firestore, "tasks"));

      const tasksSnapShot = tasks.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setTasks(tasksSnapShot);

      onSnapshot(collection(firestore, "tasks"), (snapshot) => {
        const updatedUsers = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setTasks(updatedUsers);
      });
    };
    getTasks();
  }, []);

  const delById = async (id) => {
    const docRef = doc(collection(firestore, "tasks"), id);
    await deleteDoc(docRef);
  };

  return (
    <div className="text-white w-3/6 h-3/6 bg-gray-700/10 mx-auto rounded mt-6">
      <header className="bg-gray-500/10 p-2 text-lg font-bold">
        <h1>Manage Tasks</h1>
      </header>
      <AnimatePresence>
        {modal && (
          <Modal setModal={setModal}>
            <UpdateTask id={taskId} setModal={setModal} />
          </Modal>
        )}
      </AnimatePresence>
      <section>
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.main
              key={task.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="text-white flex justify-between gap-2 bg-gray-500/20 p-2 m-2 rounded"
            >
              <section>
                <h1 className="text-white">{task.data.name}</h1>
              </section>
              <div className="flex gap-2">
                <button
                  onClick={() => delById(task.id)}
                  className="text-red-500 text-xl"
                >
                  <MdDelete />
                </button>
                <button
                  onClick={() => {
                    setTaskId(task.id);
                    setModal(true);
                  }}
                  className="text-yellow-500 text-xl"
                >
                  <MdEdit />
                </button>
              </div>
            </motion.main>
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Task;
