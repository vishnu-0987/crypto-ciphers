import React from "react";

const SmoothTextInput = (props) => {
  return (
    <textarea
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      style={{
        backgroundColor: "white",
        padding: "20px 30px",
        border: "none",
        // borderBottom: props.isLeft ? "5px solid green" :"5px solid yellow",
        // boxShadow: props.isLeft ? "5px 2px 3px #0000ff" : "5px 2px 3px #ff0000",
        // borderLeft: props.isLeft ? "" : "5px solid blue",
        // boxShadow: "0px 0px 15px #d4d4d4",
        outline: "none",
        height: "400px",
        width: "50%",
        fontSize: "32px",
        // fontFamily: "Poppins, serif",
        fontFamily: "Roboto Slab",
      }}
    />
  );
};

export default SmoothTextInput;
