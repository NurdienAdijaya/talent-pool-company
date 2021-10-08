import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { editStatus } from "../store/action/edit";
import { postList } from "../store/action/post";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { getStatus } from "../store/action/config";

const TrackerModal = ({ onClick, show, trackerId }) => {
  const dispatch = useDispatch();
  const { section } = useParams();

  const [formEdit, setFormEdit] = useState({
    status: "select status",
  });
  const [form, setForm] = useState({
    id: "select status",
  });
  const { configs } = useSelector((state) => state?.config?.configList);

  useEffect(() => {
    dispatch(getStatus());
  }, [dispatch]);

  const changeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.email === "") {
      alert("Please fill all form");
    } else {
      dispatch(postList(trackerId, form));
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editStatus(trackerId, formEdit));
  };

  return (
    <div>
      <Modal show={show} onHide={onClick}>
        <Modal.Header closeButton>
          {trackerId ? (
            <Modal.Title>Change tracker status?</Modal.Title>
          ) : (
            <Modal.Title>Add new {section}</Modal.Title>
          )}
        </Modal.Header>

        <Modal.Body>
          <div className="card_dropdown">
            <DropdownButton
              as={ButtonGroup}
              key="down"
              id={`dropdown-button-drop-down`}
              drop="down"
              variant="dark"
              size="sm"
              title={formEdit.status}
            >
              {configs?.map((item, index) => {
                return (
                  <Dropdown.Item
                    eventKey={index}
                    id="status"
                    name="status"
                    value={item}
                    onClick={(e) =>
                      setFormEdit({ ...formEdit, [e.target.name]: item })
                    }
                  >
                    {item}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </div>
          {/* <form className="body_container" onSubmit={(e) => handleSubmit(e)}>
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
          </form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}>
            Close
          </Button>
          {trackerId ? (
            <Button variant="primary" onClick={handleEdit}>
              Edit Status
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

export default TrackerModal;
