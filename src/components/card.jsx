import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../assets/styles/card.css";
import ModalComponent from "./modal";

const Card = (lists) => {
  const [detailShow, setDetailShow] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleClose = () => setDetailShow(false);
  const handleDeleteShow = (id, name) => {
    setId(id);
    setName(name);
    setDetailShow(true);
  };
  const handleEditShow = (id, name, email) => {
    setId(id);
    setName(name);
    setEmail(email);

    setDetailShow(true);
  };

  return (
    <div className="card_component">
      {lists?.lists?.data?.map((item, index) => {
        return (
          <div key={index} className="card_container">
            <div className="d-flex justify-content-between">
              <p className="bold">Name :</p>
              <p>{item.name}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="bold">Email :</p>
              <p>{item.email}</p>
            </div>
            <div className="card_button_container">
              <Button
                className="card_button"
                size="sm"
                variant="outline-info"
                onClick={() => handleEditShow(item.id, item.name, item.email)}
              >
                Edit
              </Button>
              <Button
                className="card_button"
                size="sm"
                variant="outline-danger"
                onClick={() => handleDeleteShow(item.id, item.name)}
              >
                Delete
              </Button>
            </div>
          </div>
        );
      })}
      <ModalComponent
        oldName={name}
        oldEmail={email}
        id={id}
        show={detailShow}
        onClick={handleClose}
      />
    </div>
  );
};

export default Card;
