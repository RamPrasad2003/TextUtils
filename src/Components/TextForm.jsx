import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let up = text.toUpperCase();
    setText(up);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoClick = () => {
    let lw = text.toLowerCase();
    setText(lw);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared Text", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("Mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Text", "success");
  };
  const handleExtraSpace = () => {
    let ntext = text.split(/[ ]+/);
    setText(ntext.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            placeholder="Enter Text to Analyze!!!"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="Mybox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        
        <button className="btn btn-primary m-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
