import React, { useState } from "react";
import Notification from "./components/notification/Notification";
import "./App.css";
import Form from "./components/form/Form";
import html2canvas from "html2canvas";

const App = () => {
  const [amount, setAmount] = useState(150);
  const [time, setTime] = useState(1);
  const [timeType, setTimeType] = useState("h");
  const [image, setImage] = useState("/assets/images/img1.jpeg");

  const downloadImage = (url, name) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const onDownload = () => {
    html2canvas(document.getElementsByTagName("main")[0]).then((canvas) => {
      const url = canvas.toDataURL("image/png");
      downloadImage(url, "x.png");
    });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  return (
    <section className="app">
      <h1>Generate Dummy Twitter (X) Income Notification</h1>
      <div className="app-container">
        <Form
          amount={amount}
          time={time}
          timeType={timeType}
          onAmountChange={setAmount}
          onTimeChange={setTime}
          onTimeTypeChange={setTimeType}
          onDownload={onDownload}
          onImageChange={onImageChange}
        />
        <main>
          <img className="background" src={image} alt="background" />
          <Notification amount={amount} time={time} timeType={timeType} />
        </main>
      </div>
    </section>
  );
};

export default App;
