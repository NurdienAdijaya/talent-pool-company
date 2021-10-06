import React from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import "../assets/styles/trackerCard.css";

const TrackerCard = (lists) => {
  return (
    <div className="card_component">
      {lists?.lists?.data?.map((item, index) => {
        return (
          <div key={index} className="card_container">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="bold">status :</h6>
              <div>
                <DropdownButton
                  as={ButtonGroup}  
                  key="down"
                  id={`dropdown-button-drop-down`}
                  drop="down"
                  variant="secondary"
                  size="sm"
                  title={item.status}
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <div className="card_detail">
              <div className="d-flex justify-content-between">
                <p className="bold">Talent Name :</p>
                <p>{item.talent.name}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="bold">Company Name :</p>
                <p>{item.company.name}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="bold">PIC Name :</p>
                <p>{item.pic.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrackerCard;
