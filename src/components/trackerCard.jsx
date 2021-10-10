import React, { useState } from "react";
import "../assets/styles/trackerCard.css";
import { Button } from "react-bootstrap";
import TrackerModal from "./trackerModal";

const TrackerCard = (lists) => {
  const [detailShow, setDetailShow] = useState(false);
  const [id, setId] = useState();

  const handleClose = () => setDetailShow(false);
  const handleEditShow = (id) => {
    setId(id);

    setDetailShow(true);
  };

  return (
    <div className="card_component">
      {lists?.lists?.data?.map((item, index) => {
        return (
          <div key={index} className="card_container">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="bold">status :</h6>
              <div>
                <div className="tracker_status">
                  <p
                    className="bold tracker_status_text"
                    style={{
                      color:
                        item.status === "review"
                          ? "#C2B280"
                          : item.status === "hr interview"
                          ? "#FFFF00"
                          : item.status === "user interview"
                          ? "#FFFF00"
                          : item.status === "offer"
                          ? "#BFFF00"
                          : item.status === "rejected"
                          ? "red"
                          : "#66FF00",
                    }}
                    onClick={() => handleEditShow(item.id)}
                  >
                    {item.status}
                  </p>
                </div>
              </div>
            </div>
            <div className="card_detail">
              <div className="detail">
                <p className="bold">Talent Name :</p>
                <p>{item.talent.name}</p>
              </div>
              <div className="detail">
                <p className="bold">Company Name :</p>
                <p>{item.company.name}</p>
              </div>
              <div className="detail">
                <p className="bold">PIC Name :</p>
                <p>{item.pic.name}</p>
              </div>
            </div>
            <div className="card_button_container">
              <Button
                className="card_button"
                size="sm"
                variant="outline-info"
                onClick={() => handleEditShow(item.id)}
              >
                Edit
              </Button>
            </div>
          </div>
        );
      })}
      <TrackerModal show={detailShow} onClick={handleClose} trackerId={id} />
    </div>
  );
};

export default TrackerCard;
