import React from "react";
import "../assets/styles/card.css";

const Card = (lists) => {
  console.log("lists", lists);

  return (
    <>
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
