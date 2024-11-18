import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AddTaskModal from "./components/AddTaskModal";
import KanbanColumn from "./components/KanbanColumn";

const App = () => {
  const dummyData = [
    {
      id: 1,
      title: "Sample Task",
      description: "Sample description for this task.",
      tag: "Development",
      startDate: "2024-11-18",
      endDate: "2024-11-25",
      status: "Backlog",
    },
  ];

  //states START
  const [tasks, setTasks] = useState(dummyData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  //state END

  //add new task and close modal after finish
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
    setIsModalOpen(false);
  };

  const columns = ["Backlog", "On Progress", "Done"];

  return (
    <div>
      <Navbar openModal={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <AddTaskModal
          addTask={addTask}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
      <div className="p-4">
        <div className="flex space-x-4">
          {columns.map((column) => (
            <KanbanColumn
              key={column}
              title={column}
              tasks={tasks.filter((task) => task.status === column)}
            />
          ))}

          {/* <KanbanColumn title="Backlog" />
          <KanbanColumn title="On Progress" />
          <KanbanColumn title="Done" /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
