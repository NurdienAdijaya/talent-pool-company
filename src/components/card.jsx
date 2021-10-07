import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../assets/styles/card.css";
import ModalComponent from "./modal";

const Card = (lists) => {
  const [detailShow, setDetailShow] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState();

  const handleClose = () => setDetailShow(false);
  const handleShow = (id, name) => {
    setId(id);
    setName(name);
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

            <Button
              size="sm"
              variant="primary"
              onClick={() => handleShow(item.id, item.name)}
            >
              Danger
            </Button>
          </div>
        );
      })}
      <ModalComponent
        name={name}
        id={id}
        show={detailShow}
        onClick={handleClose}
      />
    </div>
  );
};

export default Card;
