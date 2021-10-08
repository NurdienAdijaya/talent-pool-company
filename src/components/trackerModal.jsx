import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { editStatus } from "../store/action/edit";
import { postList } from "../store/action/post";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { getStatus } from "../store/action/config";
import { getCompany } from "../store/action/company";
import { getPic } from "../store/action/pic";
import { getTalent } from "../store/action/talent";

const TrackerModal = ({ onClick, show, trackerId }) => {
  const dispatch = useDispatch();
  const { section } = useParams();

  const [formEdit, setFormEdit] = useState({
    status: "select status",
  });
  const [form, setForm] = useState({
    talent: "",
    pic: "",
    company: "",
  });
  const { configs } = useSelector((state) => state?.config?.configList);
  const { companies } = useSelector((state) => state?.company?.companyList);
  const { pics } = useSelector((state) => state?.pic?.picList);
  const { talents } = useSelector((state) => state?.talent?.talentList);

  useEffect(() => {
    dispatch(getStatus());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getPic());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTalent());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.talent === "" || form.company === "" || form.pic === "") {
      alert("Please fill all form");
    } else {
      dispatch(postList("trackers", form));
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
          {trackerId ? (
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
          ) : (
            <div>
              <div className="new_dropdown">
                <h6>Talent: </h6>
                <Form.Select
                  aria-label="Default select example"
                  id="talent"
                  name="talent"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                >
                  <option>Open this select menu</option>
                  {talents?.data?.map((item, index) => {
                    return (
                      <option
                        key={index}
                        id="talent"
                        name="talent"
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
              <div className="new_dropdown">
                <h6>Company: </h6>
                <Form.Select
                  aria-label="Default select example"
                  id="company"
                  name="company"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                >
                  <option>Open this select menu</option>
                  {companies?.data?.map((item, index) => {
                    return (
                      <option
                        key={index}
                        id="company"
                        name="company"
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
              <div className="new_dropdown">
                <h6>PIC: </h6>
                <Form.Select
                  aria-label="Default select example"
                  id="pic"
                  name="pic"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                >
                  <option>Open this select menu</option>
                  {pics?.data?.map((item, index) => {
                    return (
                      <option key={index} id="pic" name="pic" value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>
          )}

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
