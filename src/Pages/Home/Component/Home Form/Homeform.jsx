import React, { useState } from "react";
import "./homeform.css";

export const Homeform = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mailId, setMailId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, mailId, mobileNo, purpose, message);
  };

  return (
    <div className="home-form">
      

      <form onSubmit={handleSubmit}>
        <div className="home-form-group1">
          <div className="home-form-group-name">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="home-form-group-name">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>

        <div className="home-form-group">
          <label>Mail ID</label>
          <input
            type="email"
            className="form-control"
            placeholder="Mail ID"
            value={mailId}
            onChange={(event) => setMailId(event.target.value)}
          />
        </div>
        <div className="home-form-group">
          <label>Mobile No</label>
          <input
            type="number"
            className="form-control"
            placeholder="Mobile No"
            value={mobileNo}
            onChange={(event) => setMobileNo(event.target.value)}
          />
        </div>
        <div className="home-form-group">
          <label>Purpose</label>
          <input
            type="text"
            className="form-control"
            placeholder="Advertisement / Query "
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}
          />
        </div>
        <div className="home-form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
       
      </form>
    
        <div className="submit-btn-primary"><span>Submit</span></div>
    </div>
  );
};
