import React from "react";
import "./Form.css";

const Form = ({
  amount,
  time,
  timeType,
  onAmountChange,
  onTimeChange,
  onTimeTypeChange,
  onDownload,
  onImageChange,
}) => {
  const onChange = (e, type) => {
    const value = e.target.value?.trim();
    switch (type) {
      case "amount":
        value < 10000 && onAmountChange(value);
        break;
      case "time":
        value < 60 && onTimeChange(value);
        break;
      case "timeType":
        onTimeTypeChange(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="control">
          <label>Enter Amount</label>
          <input
            type="number"
            max="10000"
            name="amount"
            id="amount"
            value={amount}
            placeholder="Enter Amount here"
            onChange={(e) => onChange(e, "amount")}
          />
        </div>
        <div className="control">
          <label>Enter Time</label>
          <input
            type="number"
            max="60"
            name="time"
            id="time"
            value={time}
            placeholder="Enter time here"
            onChange={(e) => onChange(e, "time")}
          />
        </div>
        <div className="control">
          <label>Select Duration</label>
          <select value={timeType} onChange={(e) => onChange(e, "timeType")}>
            <option value="">Select</option>
            <option value="s">Seconds (s) ago</option>
            <option value="m">Minutes (m) ago</option>
            <option value="h">Hours (h) ago</option>
            <option value="d">Days (d) ago</option>
          </select>
        </div>
        <div className="control-full">
          <label htmlFor="file" className="label-upload">
            Upload Custom Background
          </label>
          <input
            className="file"
            id="file"
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            onChange={onImageChange}
          />
        </div>
        <div className="control-full">
          <button className="btn-download" type="button" onClick={onDownload}>
            Download
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
