import React, { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import UpdateTask from "./UpdateTask";
import Modal from "./Modal";
import { firestore } from "../firebase/config";
import { useAuth } from "../hooks/useAuth";
import { AnimatePresence, motion } from "framer-motion";
import {
  getDocs,
  onSnapshot,
  collection,
  deleteDoc,
  doc,
  where,
  query,
} from "firebase/firestore";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [taskId, setTaskId] = useState("");
  const user = useAuth();

  useEffect(() => {
    const getTasks = async () => {
      const tasksCollection = collection(firestore, "Tasks");
      const q = query(tasksCollection, where("user", "==", user.email));

      const tasksSnapshot = await getDocs(q);

      const tasksData = tasksSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setTasks(tasksData);
    };

    getTasks();
  }, [user.email]);

  const deleteById = async (id) => {
    const docRef = doc(collection(firestore, "Tasks"), id);
    await deleteDoc(docRef);
  };

  return (
    <>
      {tasks.length === 0 ? (
        <div className="text-white text-center m-3 bg-red-400/10 rounded">
          <h1>Oops!!</h1>
          <h1>Seems You dont't have any tasks. Just adding</h1>
        </div>
      ) : (
        <div className="bg-gray-500/20 mx-3 mt-5 p-2 h-fit">
          <header className="text-white text-lg text-center">
            <h1>Manage Tasks</h1>
          </header>
          <AnimatePresence>
            {modal && (
              <Modal setModal={setModal}>
                <UpdateTask id={taskId} setModal={setModal} />
              </Modal>
            )}
          </AnimatePresence>
          <section className="mt-5">
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
                    <h1 className="text-white">{task.data.task}</h1>
                  </section>
                  <div className="flex gap-2">
                    <button
                      onClick={() => deleteById(task.id)}
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
      )}
    </>
  );
};

export default Task;
