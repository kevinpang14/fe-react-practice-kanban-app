import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

const AddTaskModal = ({ closeModal, addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("Development");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(""); //default
  const [status, setStatus] = useState("Backlog"); //default

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !startDate || !endDate) return;
    addTask({ title, description, tag, startDate, endDate, status });
    //reset state after submit
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setTag("Development");
    setStatus("Backlog");
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Task</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">Title</label>
            <input
              type="text"
              className="input input-bordered"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">Description</label>
            <CKEditor
              editor={ClassicEditor}
              data={description}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
            />
            {/* <textarea
              className="textarea textarea-bordered"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            /> */}
          </div>
          <div className="form-control">
            <label className="label">Start Date</label>
            <input
              type="date"
              className="input input-bordered"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">End Date</label>
            <input
              type="date"
              className="input input-bordered"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">Tag</label>
            {/* to set the tag */}
            <select
              className="select select-bordered"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              <option>Development</option>
              <option>Testing</option>
              <option>Design</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">Status</label>
            {/* to set the status */}
            <select
              className="select select-bordered"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Backlog</option>
              <option>On Progress</option>
              <option>Done</option>
            </select>
          </div>
          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              Cancel
            </button>
            <button className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
