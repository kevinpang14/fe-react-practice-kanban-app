import React from "react";

const Navbar = ({ openModal }) => (
  <div className="navbar bg-base-100 shadow-lg">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Kanban App</a>
    </div>
    <div className="flex-none">
      <button className="btn btn-primary" onClick={openModal}>
        Add Task
      </button>
    </div>
  </div>
);

export default Navbar;
