import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text is cleared!", "success");
  };
  const handleListenClick = () => {
    if (text.trim() === "") {
      alert("Please enter some text first!");
      return;
      
    }
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
    props.showAlert("Listen carefully 👂", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#03233dff",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#03233dff" : "white",
              color: props.mode === "dark" ? "white" : "#03233dff",
              border: "2px solid #e3e0e0ff",
                borderRadius: '8px',
                boxShadow: "0 3px 14px rgba(203, 206, 216, 0.69)"
            }}
            id="myBox"
            rows="6"
          ></textarea>
          <div />
          <div className="mb-3 text-center d-flex flex-wrap gap-2 justify-content-center mt-3">
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>
              Uppercase
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>
              Lowercase
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>
              Clear
            </button>
            <button
            disabled={text.length===0}
              className="btn btn-primary mx-1"
              onClick={handleListenClick}
            >
              Listen
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>
              Copy Text
            </button>
          </div>
          <h2 className="headding text-center">Your text summary</h2>
          <p className="para text-center">
            <b>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</b>{" "}
            words and <b>{text.length}</b> characters
          </p>
          <p className="para text-center">
            <b>
              {0.008 *
                (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)}
            </b>{" "}
            Minutes read
          </p>
          <h2 className="heading text-center">Preview</h2>
          <p className="para text-center">
            {text || "Nothing to preview!🤓"}
          </p>
        </div>
      </div>
    </>
  );
}
