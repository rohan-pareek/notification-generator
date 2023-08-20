import React from "react";
import "./Notification.css";

const Notification = ({amount, time, timeType}) => {
  return (
    <section className="notification">
      <div className="logo">
        <img src="/assets/images/x.png" alt="logo" />
      </div>
      <div className="content">
        <div className="header">
          <span className="title">You got paid!</span>
          <span className="time">{time}{timeType} ago</span>
        </div>
        <div className="message">
          ${amount}.00 has been deposited into your account.
        </div>
      </div>
    </section>
  );
};

export default Notification;
