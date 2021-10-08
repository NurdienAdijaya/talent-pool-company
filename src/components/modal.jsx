import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { deleteList } from "../store/action/delete";
import { edit } from "../store/action/edit";
import { postList } from "../store/action/post";

const ModalComponent = ({ onClick, show, oldName = "", id, oldEmail = "" }) => {
  const dispatch = useDispatch();
  const { section } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.email === "") {
      alert("Please fill all form");
    } else {
      dispatch(postList(section, form));
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteList(section, id));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(edit(section, id, form));
  };

  return (
    <div>
      <Modal show={show} onHide={onClick}>
        <Modal.Header closeButton>
          {id ? (
            <Modal.Title>Delete {form.name}?</Modal.Title>
          ) : (
            <Modal.Title>Add new {section}</Modal.Title>
          )}
        </Modal.Header>
        {oldEmail ? (
          <Modal.Body>
            <form className="body_container" onSubmit={(e) => handleSubmit(e)}>
              <div className="input_container">
                <h6 className="input_title">{section} name :</h6>
                <input
                  className="input"
                  type="text"
                  pattern="[a-zA-Z0-9-]+"
                  required
                  value={form.name ? form.name : oldName}
                  id="name"
                  name="name"
                  onChange={(e) => changeForm(e)}
                />
              </div>
              <div className="input_container">
                <h6 className="input_title">{section} email :</h6>
                <input
                  className="input"
                  type="email"
                  value={form.email ? form.email : oldEmail}
                  id="email"
                  name="email"
                  onChange={(e) => changeForm(e)}
                />
              </div>
            </form>
          </Modal.Body>
        ) : id ? (
          <Modal.Body>
            <div className="body_container">
              <h6>If you do this, you can't turn back</h6>

              <h6>Are you sure?</h6>
            </div>
          </Modal.Body>
        ) : section === "trackers" ? null : (
          <Modal.Body>
            <form className="body_container" onSubmit={(e) => handleSubmit(e)}>
              <div className="input_container">
                <h6 className="input_title">{section} name :</h6>
                <input
                  className="input"
                  type="text"
                  pattern="[a-zA-Z0-9-]+"
                  required
                  value={form.name}
                  id="name"
                  name="name"
                  onChange={(e) => changeForm(e)}
                />
              </div>
              <div className="input_container">
                <h6 className="input_title">{section} email :</h6>
                <input
                  className="input"
                  type="email"
                  value={form.email}
                  id="email"
                  name="email"
                  onChange={(e) => changeForm(e)}
                />
              </div>
            </form>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}>
            Close
          </Button>
          {oldEmail ? (
            <Button variant="primary" onClick={handleEdit}>
              Submit
            </Button>
          ) : id ? (
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
