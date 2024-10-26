import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/BinaryOverview";

export default function BinaryEncoding() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanations, setExplanations] = useState([]); // State for explanations

  function encode(str) {
    let result = "";
    let explanationsArray = [];

    // Ensure the input is treated as a string
    str = String(str); // Convert input to string

    // Convert to number and handle non-numeric input
    const num = Number(str);
    if (isNaN(num)) {
      explanationsArray.push(
        `<code>'${str}'</code> is not a valid number. Please enter a numeric value.<br>`
      );
      setExplanations(explanationsArray);
      return "";
    }

    result = (num >>> 0).toString(2); // Convert number to binary

    // Enhanced explanation with ASCII values
    explanationsArray.push(
      `<code>'${num}'</code> (<strong>ASCII: ${num}</strong>) is converted to binary: <code>'${result}'</code> (<strong>Binary Value</strong>).<br>`
    );

    setExplanations(explanationsArray); // Set explanation array
    return result;
  }

  function decode(bin) {
    let result = parseInt(bin, 2).toString(10); // Convert binary to decimal
    let explanationsArray = [];

    // Enhanced explanation with ASCII values
    explanationsArray.push(
      `<code>'${bin}'</code> (<strong>Binary Value</strong>) is converted back to decimal: <code>'${result}'</code> (<strong>ASCII: ${result}</strong>).<br>`
    );

    setExplanations(explanationsArray); // Set explanation array
    return result;
  }

  return (
    <>
      {showOverview && (
        <CipherOverview
          setShowOverview={setShowOverview}
          Header={Header}
          Description={Description}
          Example={Example}
          References={References}
        />
      )}
      <CipherFactory
        title={"Binary Conversion"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanations} // Pass explanation to CipherFactory
      />
    </>
  );
}
